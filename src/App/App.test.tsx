import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  jest.setTimeout(10000);
  const { container, queryByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("renders the navigator", async () => {
  const { queryByTestId, queryByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(queryByTestId("Navigator")).not.toBeNull();
});

it("renders the footer", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("Footer")).not.toBeNull();
});

describe("rendering pages", () => {
  it("renders the home page by default", async () => {
    const { queryByTestId, queryByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // wait for CovidTrackerPreviewCard to finish loading
    await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
    expect(queryByTestId("Home")).not.toBeNull();
  });

  it("renders the Redcycle landing page", async () => {
    const { queryByTestId, getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("projects-menu"));
    fireEvent.click(getByTestId("redcycle-link"));
    await waitFor(() =>
      expect(queryByTestId("RedcycleLandingPage")).not.toBeNull()
    );
  });

  it("renders the covid metrics tracker project", async () => {
    const { queryByTestId, getByTestId, queryByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId("projects-menu"));
    fireEvent.click(getByTestId("covid-metrics-link"));
    await waitFor(() => {
      expect(queryByTestId("CovidTracker")).not.toBeNull();
      expect(queryByText("United States of America")).not.toBeNull();
      expect(queryByText("Illinois")).not.toBeNull();
    });
  });
});
