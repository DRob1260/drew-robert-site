import React from "react";
import { Navigator } from "./Navigator";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";

it("should be accessible", async () => {
  const { container } = render(<Navigator />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

describe("navigation to pages", () => {
  // there's probably a better way to test these, but jest doesn't seem to pick up on URL path changes
  it("navigates to the correct route when the 'Home' button is clicked", () => {
    const { getByTestId } = render(<Navigator />);
    expect(getByTestId("Navigator-home")).toHaveAttribute("href", "/home");
  });
  it("navigates to the correct route when the site icon is clicked", () => {
    const { getByTestId } = render(<Navigator />);
    expect(getByTestId("Navigator-icon")).toHaveAttribute("href", "/");
  });
});
