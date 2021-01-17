import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { DependencyCredits } from "./DependencyCredits";

it("is accessible", async () => {
  const { container } = render(<DependencyCredits />);
  expect(await axe(container)).toHaveNoViolations();
});

it("displays FeaturedDependencies", () => {
  const { queryByTestId } = render(<DependencyCredits />);
  expect(queryByTestId("FeaturedDependencies")).not.toBeNull();
});

it("displays AllDependencies", () => {
  const { queryByTestId } = render(<DependencyCredits />);
  expect(queryByTestId("AllDependencies")).not.toBeNull();
});
