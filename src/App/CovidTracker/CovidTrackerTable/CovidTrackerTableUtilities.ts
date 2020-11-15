import { LocationHistoricalRecordsClass } from "../../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";
import { Column } from "material-table";
import { DateTime } from "luxon";

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
  const dateSplit = dateString.split("/");
  const year = parseInt(dateSplit[2], 10);
  const day = parseInt(dateSplit[1], 10);
  const month = parseInt(dateSplit[0], 10);
  const datetime = DateTime.fromObject({
    year: year,
    day: day,
    month: month,
  });
  const isoDate = datetime.toISODate();
  return new Date(isoDate);
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
