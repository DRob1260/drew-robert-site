import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { App } from "./App";

it("should be accessible", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("renders the navigator", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("Navigator")).not.toBeNull();
});

it("renders the footer", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("Footer")).not.toBeNull();
});

it("renders the home page by default", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("Home")).not.toBeNull();
});

it("renders the covid metrics tracker project", async () => {
  const { queryByTestId, getByTestId, getByText } = render(<App />);
  fireEvent.click(getByTestId("projects-menu"));
  fireEvent.click(getByText("COVID-19 Metrics Tracker"));
  await waitFor(() => expect(queryByTestId("CovidTracker")).not.toBeNull());
});

it("renders the Redcycle landing page", async () => {
  const { queryByTestId, getByTestId, getByText } = render(<App />);
  fireEvent.click(getByTestId("projects-menu"));
  fireEvent.click(getByText("Redcycle"));
  await waitFor(() =>
    expect(queryByTestId("RedcycleLandingPage")).not.toBeNull()
  );
});
