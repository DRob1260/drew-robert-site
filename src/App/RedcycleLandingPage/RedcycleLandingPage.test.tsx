import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { RedcycleLandingPage } from "./RedcycleLandingPage";

it("should be accessible", async () => {
  const { container } = render(<RedcycleLandingPage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
