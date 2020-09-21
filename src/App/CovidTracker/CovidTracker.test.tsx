import React from "react";
import { axe } from "jest-axe";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { CovidTracker } from "./CovidTracker";
import { BrowserRouter } from "react-router-dom";

it("is accessible", async () => {
  const { container, getByTestId } = render(
    <BrowserRouter>
      <CovidTracker
        country={"unitedstates"}
        territory={"illinois"}
        region={"mclean"}
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
        country={"unitedstates"}
        territory={"illinois"}
        region={"mclean"}
      />
    </BrowserRouter>
  );
  const loadingIndicator = getByTestId("loading-indicator-container");
  expect(loadingIndicator).toBeInTheDocument();
  await waitFor(() => expect(loadingIndicator).not.toBeInTheDocument());
});

describe("location selection", () => {
  it("has the locations passed in selected by default", async () => {
    const { queryByText } = render(
      <BrowserRouter>
        <CovidTracker
          country={"unitedstates"}
          territory={"illinois"}
          region={"mclean"}
        />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(queryByText("United States of America")).not.toBeNull();
      expect(queryByText("Illinois")).not.toBeNull();
      expect(queryByText("McLean")).not.toBeNull();
    });
  });
  it("navigates to the correct path when the region is changed", async () => {
    const { getAllByTestId, queryByText } = render(
      <BrowserRouter>
        <CovidTracker
          country={"unitedstates"}
          territory={"illinois"}
          region={"mclean"}
        />
      </BrowserRouter>
    );
    await waitFor(() => expect(queryByText("McLean")).not.toBeNull());
    fireEvent.change(getAllByTestId("Selector-Select")[2], {
      target: { value: "chicago" },
    });
    const path = document.location.pathname;
    expect(path).toEqual("/covid/unitedstates/illinois/chicago");
  });
});
