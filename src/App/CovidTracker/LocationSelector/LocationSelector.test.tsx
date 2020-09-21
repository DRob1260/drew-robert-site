import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { LocationSelector } from "./LocationSelector";
import {
  countryValues,
  regionValues,
  territoryValues,
} from "../../../data/CovidTracker/LocationSelector/LocationSelector";

it("should be accessible", async () => {
  const { container } = render(
    <LocationSelector
      countryValues={countryValues}
      territoryValues={territoryValues}
      regionValues={regionValues}
    />
  );

  expect(await axe(container)).toHaveNoViolations();
});

it("displays nothing when values are undefined", () => {
  const { queryByTestId } = render(
    <LocationSelector
      countryValues={undefined}
      territoryValues={undefined}
      regionValues={undefined}
    />
  );
  expect(queryByTestId("Selector-Country")).toBeNull();
  expect(queryByTestId("Selector-Territory")).toBeNull();
  expect(queryByTestId("Selector-Region")).toBeNull();
});

it("displays inputs when values are defined", () => {
  const { queryByTestId } = render(
    <LocationSelector
      countryValues={countryValues}
      territoryValues={territoryValues}
      regionValues={regionValues}
    />
  );
  expect(queryByTestId("Selector-Country")).not.toBeNull();
  expect(queryByTestId("Selector-Territory")).not.toBeNull();
  expect(queryByTestId("Selector-Region")).not.toBeNull();
});
