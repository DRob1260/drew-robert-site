import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import { AllDependencies } from "./AllDependencies";
import { getDependencies } from "../DependencyCreditsUtilities";

it("is accessible", async () => {
  const { container } = render(<AllDependencies />);

  expect(await axe(container)).toHaveNoViolations();
});

const allDependencies = [...getDependencies(), ...getDependencies()];

it("displays all dependencies", () => {
  const { queryByText } = render(<AllDependencies />);

  allDependencies.forEach((dependency) => {
    expect(queryByText(dependency.name)).not.toBeNull();
  });
});

it("can open the npm page of each dependency", () => {
  global.open = jest.fn();

  const { getByTestId } = render(<AllDependencies />);

  allDependencies.forEach((dependency) => {
    fireEvent.click(getByTestId(`link-to-${dependency.name}`));
    expect(global.open).toBeCalledWith(dependency.url);
  });
});
