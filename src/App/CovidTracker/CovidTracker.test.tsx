import React from "react";
import { axe } from "jest-axe";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { CovidTracker } from "./CovidTracker";
import { rest } from "msw";
import { Urls } from "../../config";
import { setupServer } from "msw/native";
import { IllinoisRegionData } from "../../mocks/CovidTracker/MockRegionData";

// coverage is pretty low for this component, but a lot of the uncovered code is surrounding the nivo graph component

it("is accessible", async () => {
  const { container, getByTestId } = render(<CovidTracker />);
  const results = await axe(container);
  const loadingIndicator = getByTestId("loading-indicator-container");
  await waitFor(() => expect(loadingIndicator).not.toBeInTheDocument());
  expect(results).toHaveNoViolations();
});

it("shows a loading indicator while fetching COVID data", async () => {
  const { getByTestId } = render(<CovidTracker />);
  const loadingIndicator = getByTestId("loading-indicator-container");
  expect(loadingIndicator).toBeInTheDocument();
  await waitFor(() => expect(loadingIndicator).not.toBeInTheDocument());
});

describe("region selection", () => {
  it("has Illinois selected by default", () => {
    const { getByTestId } = render(<CovidTracker />);
    const regionButton = getByTestId("region-button");
    expect(regionButton).toHaveTextContent("Illinois");
  });
  it("displays a list of regions when clicked", async () => {
    const { getByTestId, queryByText } = render(<CovidTracker />);
    const regionButton = getByTestId("region-button");
    expect(queryByText("McLean")).toBeNull();
    fireEvent.click(regionButton);
    await waitFor(() => expect(queryByText("McLean")).not.toBeNull());
  });
  it("selects the region when it's clicked in the menu", async () => {
    const { getByTestId, getByText, queryByText } = render(<CovidTracker />);
    const regionButton = getByTestId("region-button");
    expect(regionButton).not.toHaveTextContent("McLean");
    fireEvent.click(regionButton);
    await waitFor(() => expect(queryByText("McLean")).not.toBeNull());
    fireEvent.click(getByText("McLean"));
    expect(regionButton).toHaveTextContent("McLean");
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
      <CovidTracker />
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
    const { queryByTestId } = render(<CovidTracker />);
    await waitFor(() => expect(queryByTestId("error-message")).not.toBeNull());
    server.resetHandlers();
    server.close();
  });
});
