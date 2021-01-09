import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
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
  expect(queryByTestId("guldentech-tile")).not.toBeNull();
});
