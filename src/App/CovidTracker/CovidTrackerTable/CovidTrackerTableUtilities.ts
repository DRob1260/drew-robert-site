import { LocationHistoricalRecordsClass } from "../../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";
import { Column } from "material-table";

export const buildCovidTrackerTableRows = (
  locationHistoricalRecords: LocationHistoricalRecordsClass
): CovidTrackerTableRow[] => {
  return locationHistoricalRecords.historicalRecords.map((record) => {
    return {
      day: record.testDate,
      totalDeaths: record.totals.deaths,
      totalCases: record.totals.cases,
      totalTests: record.totals.tested,
    };
  });
};

const formatNumber = (number: number) => {
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
};

export const covidTrackerTableColumns: Column<CovidTrackerTableRow>[] = [
  {
    title: "Day",
    field: "day",
    type: "date",
    defaultSort: "desc",
  },
  {
    title: "Total Deaths",
    field: "totalDeaths",
    type: "numeric",
  },
  {
    title: "Total Cases",
    field: "totalCases",
    type: "numeric",
  },
  {
    title: "Total Tests",
    field: "totalTests",
    type: "numeric",
  },
];
