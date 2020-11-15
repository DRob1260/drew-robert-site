import {
  buildCovidTrackerTableRows,
  getExportName,
} from "./CovidTrackerTableUtilities";
import { illinoisLocationHistoricalRecordsClass } from "../../../data/CovidTracker/illinois";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";

test("buildCovidTrackerTableRows", () => {
  const expectedCovidTrackerTableRows: CovidTrackerTableRow[] = [
    {
      day: new Date("9-13-2020"),
      totalDeaths: 8309,
      totalCases: 261371,
      totalTests: 4735866,
    },
  ];
  expect(
    buildCovidTrackerTableRows(illinoisLocationHistoricalRecordsClass)
  ).toEqual(expectedCovidTrackerTableRows);
});

test("getExportName", () => {
  expect(getExportName()).toBeDefined();
});
