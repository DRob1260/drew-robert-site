import React from "react";
import { axe } from "jest-axe";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { CovidTracker } from "./CovidTracker";

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
