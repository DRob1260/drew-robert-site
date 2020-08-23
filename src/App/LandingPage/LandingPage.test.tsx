import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

it("should be accessible", async () => {
  const { container } = render(<LandingPage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
