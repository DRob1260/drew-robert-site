import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import { FeaturedDependencies } from "./FeaturedDependencies";
import { featuredDependencies } from "../DependencyCreditsUtilities";

it("is accessible", async () => {
  const { container } = render(<FeaturedDependencies />);

  expect(await axe(container)).toHaveNoViolations();
});

it("has has a card with title, description, and link for each featured dependency", () => {
  global.open = jest.fn();

  const { queryByText, getByTestId } = render(<FeaturedDependencies />);
  featuredDependencies.forEach((dependency) => {
    expect(queryByText(dependency.name)).not.toBeNull();
    expect(queryByText(dependency.description)).not.toBeNull();
    fireEvent.click(getByTestId(`link-to-${dependency.name}`));
    expect(global.open).toBeCalledWith(dependency.url);
  });
});
