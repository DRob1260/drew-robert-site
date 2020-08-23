import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
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

it("renders the landing page by default", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("LandingPage")).not.toBeNull();
  expect(queryByTestId("Home")).toBeNull();
});

// I couldn't figure out how to route to the other paths
