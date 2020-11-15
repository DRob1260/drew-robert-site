import { LocationHistoricalRecordsClass } from "../../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";
import { Column } from "material-table";

export const buildCovidTrackerTableRows = (
  locationHistoricalRecords: LocationHistoricalRecordsClass
): CovidTrackerTableRow[] => {
  return locationHistoricalRecords.historicalRecords.map((record) => {
    return {
      day: getDate(record.testDate),
      totalDeaths: record.totals.deaths,
      totalCases: record.totals.cases,
      totalTests: record.totals.tested,
    };
  });
};

const getDate = (dateString: string): Date => {
  return new Date(dateString.replace(/\//gi, "-"));
};

export const getExportName = (): string => {
  const date = new Date();
  const dateString = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
  return `covid-data-${dateString}`;
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
    filtering: true,
  },
  {
    title: "Total Deaths",
    field: "totalDeaths",
    type: "numeric",
    render: (rowData: CovidTrackerTableRow): string => {
      return formatNumber(rowData.totalDeaths);
    },
    filtering: false,
  },
  {
    title: "Total Cases",
    field: "totalCases",
    type: "numeric",
    render: (rowData: CovidTrackerTableRow): string => {
      return formatNumber(rowData.totalCases);
    },
    filtering: false,
  },
  {
    title: "Total Tests",
    field: "totalTests",
    type: "numeric",
    render: (rowData: CovidTrackerTableRow): string => {
      return formatNumber(rowData.totalTests);
    },
    filtering: false,
  },
];
