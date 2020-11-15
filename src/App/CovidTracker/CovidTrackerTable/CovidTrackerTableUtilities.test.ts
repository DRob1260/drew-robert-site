import {
  buildCovidTrackerTableRows,
  getExportName,
} from "./CovidTrackerTableUtilities";
import { illinoisLocationHistoricalRecordsClass } from "../../../data/CovidTracker/illinois";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";

test("buildCovidTrackerTableRows", () => {
  const expectedCovidTrackerTableRows: CovidTrackerTableRow[] = [
    {
      day: new Date("2020-09-13T05:00:00.000Z"),
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
