import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import { Footer } from "./Footer";

it("should be accessible", async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("contains the expected content tiles", () => {
  const { queryByTestId } = render(<Footer />);
  expect(queryByTestId("github-tile")).not.toBeNull();
  expect(queryByTestId("twitter-tile")).not.toBeNull();
  expect(queryByTestId("flickr-tile")).not.toBeNull();
  expect(queryByTestId("email-tile")).not.toBeNull();
  expect(queryByTestId("dependencies-tile")).not.toBeNull();
  expect(queryByTestId("guldentech-tile")).not.toBeNull();
});

it("can launch modal from dependency tile", () => {
  const { queryByTestId, getByTestId } = render(<Footer />);
  fireEvent.click(getByTestId("footer-card-launch-button-iconbutton"));
  expect(queryByTestId("dependencies-modal")).toBeVisible();
});
