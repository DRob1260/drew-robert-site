import {
  buildCovidTrackerTableRows,
  getExportName,
} from "./CovidTrackerTableUtilities";
import { illinoisLocationHistoricalRecordsClass } from "../../../data/CovidTracker/illinois";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";
import { DateTime } from "luxon";

test("buildCovidTrackerTableRows", () => {
  const expectedDay = DateTime.fromObject({
    year: 2020,
    month: 9,
    day: 13,
  }).toJSDate();
  const expectedCovidTrackerTableRows: CovidTrackerTableRow[] = [
    {
      day: expectedDay,
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
