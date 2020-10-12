import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { CovidTrackerSelectors } from "./CovidTrackerSelectors";
import {
  countryValues,
  regionValues,
  territoryValues,
  timePeriodValues,
} from "../../../data/CovidTracker/CovidTrackerSelectors/CovidTrackerSelectors";

it("should be accessible", async () => {
  const { container } = render(
    <CovidTrackerSelectors
      timePeriodValues={timePeriodValues}
      countryValues={countryValues}
      territoryValues={territoryValues}
      regionValues={regionValues}
    />
  );

  expect(await axe(container)).toHaveNoViolations();
});

it("displays nothing when values are undefined", () => {
  const { queryByTestId } = render(
    <CovidTrackerSelectors
      timePeriodValues={undefined}
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
    <CovidTrackerSelectors
      timePeriodValues={timePeriodValues}
      countryValues={countryValues}
      territoryValues={territoryValues}
      regionValues={regionValues}
    />
  );
  expect(queryByTestId("Selector-TimePeriod")).not.toBeNull();
  expect(queryByTestId("Selector-Country")).not.toBeNull();
  expect(queryByTestId("Selector-Territory")).not.toBeNull();
  expect(queryByTestId("Selector-Region")).not.toBeNull();
});
