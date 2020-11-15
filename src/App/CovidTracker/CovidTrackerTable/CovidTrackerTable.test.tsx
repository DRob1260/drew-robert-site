import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { CovidTrackerTable } from "./CovidTrackerTable";
import { illinoisLocationHistoricalRecordsClass } from "../../../data/CovidTracker/illinois";

const tableRows = [
  {
    day: new Date("9-13-2020"),
    totalDeaths: 8309,
    totalCases: 261371,
    totalTests: 4735866,
  },
];

it("is accessible", async () => {
  const { container } = render(
    <CovidTrackerTable
      tableRows={tableRows}
      location={illinoisLocationHistoricalRecordsClass.location.name}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("displays title based on location", () => {
  const { queryByText } = render(
    <CovidTrackerTable
      tableRows={tableRows}
      location={illinoisLocationHistoricalRecordsClass.location.name}
    />
  );
  expect(queryByText("Illinois COVID-19 Data")).not.toBeNull();
});

it("hides table if tableRows is empty", () => {
  const { queryByTestId } = render(
    <CovidTrackerTable tableRows={[]} location={"Candyland"} />
  );
  expect(queryByTestId("covid-table")).toBeNull();
});

it("shows table if tableRows is not empty", () => {
  const { queryByTestId } = render(
    <CovidTrackerTable tableRows={tableRows} location={"Candyland"} />
  );
  expect(queryByTestId("covid-table")).not.toBeNull();
});
