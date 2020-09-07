import React from "react";
import { axe } from "jest-axe";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { CovidTracker } from "./CovidTracker";
import { rest } from "msw";
import { Urls } from "../../config";
import { setupServer } from "msw/native";
import { IllinoisRegionData } from "../../mocks/CovidTracker/MockRegionData";
import { BrowserRouter } from "react-router-dom";

// coverage is pretty low for this component, but a lot of the uncovered code is surrounding the nivo graph component

it("is accessible", async () => {
  const { container, getByTestId } = render(
    <BrowserRouter>
      <CovidTracker
        country={"usa"}
        state={"il"}
        region={IllinoisRegionData.region.name}
      />
    </BrowserRouter>
  );
  const results = await axe(container);
  const loadingIndicator = getByTestId("loading-indicator-container");
  await waitFor(() => expect(loadingIndicator).not.toBeInTheDocument());
  expect(results).toHaveNoViolations();
});

it("shows a loading indicator while fetching COVID data", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <CovidTracker
        country={"usa"}
        state={"il"}
        region={IllinoisRegionData.region.name}
      />
    </BrowserRouter>
  );
  const loadingIndicator = getByTestId("loading-indicator-container");
  expect(loadingIndicator).toBeInTheDocument();
  await waitFor(() => expect(loadingIndicator).not.toBeInTheDocument());
});

describe("region selection", () => {
  it("has the region passed in selected by default", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <CovidTracker
          country={"usa"}
          state={"il"}
          region={IllinoisRegionData.region.subRegions[0]}
        />
      </BrowserRouter>
    );
    const regionButton = getByTestId("region-button");
    expect(regionButton).toHaveTextContent(
      IllinoisRegionData.region.subRegions[0]
    );
  });
  it("displays a list of regions when clicked", async () => {
    const { getByTestId, queryByText } = render(
      <BrowserRouter>
        <CovidTracker
          country={"usa"}
          state={"il"}
          region={IllinoisRegionData.region.name}
        />
      </BrowserRouter>
    );
    const regionButton = getByTestId("region-button");
    expect(queryByText("McLean")).toBeNull();
    fireEvent.click(regionButton);
    await waitFor(() => expect(queryByText("McLean")).not.toBeNull());
  });
  it("navigates to the correct path when a region is clicked", async () => {
    const { getByTestId, getByText, queryByText } = render(
      <BrowserRouter>
        <CovidTracker
          country={"usa"}
          state={"il"}
          region={IllinoisRegionData.region.name}
        />
      </BrowserRouter>
    );
    const regionButton = getByTestId("region-button");
    expect(regionButton).not.toHaveTextContent("McLean");
    fireEvent.click(regionButton);
    await waitFor(() => expect(queryByText("McLean")).not.toBeNull());
    fireEvent.click(getByText("McLean"));
    const path = document.location.pathname;
    expect(path).toEqual("/covid/usa/il/McLean");
  });
});

describe("error handling", () => {
  test("API call to retrieve Illinois region data fails", async () => {
    const server = setupServer(
      rest.get(
        `${Urls.drewRobertApi}/covid/country/:country/state/:state`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.body(IllinoisRegionData));
        }
      ),
      rest.get(
        `${Urls.drewRobertApi}/covid/country/:country/state/:state/county/:county`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    server.listen();
    const { getByTestId, queryByTestId, queryByText, getByText } = render(
      <BrowserRouter>
        <CovidTracker
          country={"usa"}
          state={"il"}
          region={IllinoisRegionData.region.name}
        />
      </BrowserRouter>
    );
    const regionButton = getByTestId("region-button");
    fireEvent.click(regionButton);
    await waitFor(() => expect(queryByText("McLean")).not.toBeNull());
    fireEvent.click(getByText("McLean"));
    await waitFor(() => expect(queryByTestId("error-message")).not.toBeNull());
    server.resetHandlers();
    server.close();
  });
  test("API call to retrieve Illinois data fails", async () => {
    const server = setupServer(
      rest.get(
        `${Urls.drewRobertApi}/covid/country/:country/state/:state`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    server.listen();
    const { queryByTestId } = render(
      <BrowserRouter>
        <CovidTracker
          country={"usa"}
          state={"il"}
          region={IllinoisRegionData.region.name}
        />
      </BrowserRouter>
    );
    await waitFor(() => expect(queryByTestId("error-message")).not.toBeNull());
    server.resetHandlers();
    server.close();
  });
});
