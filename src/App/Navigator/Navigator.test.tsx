import React from "react";
import { Navigator } from "./Navigator";
import { axe } from "jest-axe";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  const { container } = render(
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// there's probably a better way to test these, but jest doesn't seem to pick up on URL path changes
it("navigates to the correct route when the 'Home' button is clicked", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
  fireEvent.click(getByTestId("Navigator-home"));
  const path = document.location.pathname;
  expect(path).toEqual("/");
});

it("navigates to the correct route when the site icon is clicked", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
  fireEvent.click(getByTestId("Navigator-icon"));
  const path = document.location.pathname;
  expect(path).toEqual("/");
});

describe("projects menu", () => {
  it("opens a list of projects when the button is clicked", async () => {
    const { getByTestId, queryByText } = render(
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    );
    await waitFor(() =>
      expect(queryByText("COVID-19 Metrics Tracker")).not.toBeVisible()
    );
    fireEvent.click(getByTestId("Navigator-projects"));
    await waitFor(() =>
      expect(queryByText("COVID-19 Metrics Tracker")).toBeVisible()
    );
  });
  it("navigates to the correct route for the COVID-19 Metrics Tracker", () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("Navigator-projects"));
    fireEvent.click(getByText("COVID-19 Metrics Tracker"));
    const path = document.location.pathname;
    expect(path).toEqual("/covid/usa/il/Illinois");
  });
});
