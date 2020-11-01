import { GraphDataPoint } from "../../models/CovidTracker/graph/GraphDataPoint";
import { HistoricalRecord } from "../../models/CovidTracker/api/HistoricalRecord";
import { GraphLineWithProperties } from "../../models/CovidTracker/graph/GraphLinesWithProperties";
import { SelectorValues, Value } from "../Inputs/Selector/Selector";
import { LocationClass } from "../../models/CovidTracker/api/LocationClass";

export const buildTotalCasesGraphLineWithProperties = (
  apiData: HistoricalRecord[],
  show: boolean
): GraphLineWithProperties => {
  const totalCasesGraphDataPoints: GraphDataPoint[] = apiData.map((apiData) => {
    return {
      x: formatDate(new Date(apiData.testDate)),
      y: apiData.totals.cases,
    };
  });

  return {
    graphLine: {
      id: "Total Cases",
      data: totalCasesGraphDataPoints,
    },
    show: show,
    color: "#00C2AD",
  };
};

export const buildTotalDeathsGraphLineWithProperties = (
  apiData: HistoricalRecord[],
  show: boolean
): GraphLineWithProperties => {
  const totalDeathsGraphDataPoints: GraphDataPoint[] = apiData.map(
    (apiData) => {
      return {
        x: formatDate(new Date(apiData.testDate)),
        y: apiData.totals.deaths,
      };
    }
  );

  return {
    graphLine: {
      id: "Total Deaths",
      data: totalDeathsGraphDataPoints,
    },
    show: show,
    color: "#107568",
  };
};

export const buildTotalTestsGraphLineWithProperties = (
  apiData: HistoricalRecord[],
  show: boolean
): GraphLineWithProperties => {
  const totalTestsGraphDataPoints: GraphDataPoint[] = apiData.map((apiData) => {
    return {
      x: formatDate(new Date(apiData.testDate)),
      y: apiData.totals.tested,
    };
  });

  return {
    graphLine: {
      id: "Total Tests",
      data: totalTestsGraphDataPoints,
    },
    show: show,
    color: "#46FCE4",
  };
};

export const buildGraphColors = (
  showTotalCases: boolean,
  showTotalDeaths: boolean,
  showTotalTests: boolean
): string[] => {
  const colors: string[] = [];
  // the order here should match the order that the GraphLines are pushed in buildGraphData
  if (showTotalCases) colors.push("#00C2AD");

  if (showTotalDeaths) colors.push("#107568");

  if (showTotalTests) colors.push("#46FCE4");

  return colors;
};

export const formatNumber = (num: number): string => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const buildTimePeriodSelectorValues = (
  numberOfRecords: number,
  setCurrentTimePeriod: (value: Value | undefined) => void
): SelectorValues => {
  const defaultTimePeriod: Value = {
    name: "Past 10 Days",
    key: "10",
    value: 10,
  };
  const numberOfTimePeriods = Math.floor(numberOfRecords / 30);
  const values: Value[] = [defaultTimePeriod];
  for (
    let numberOfDays = 30;
    numberOfDays < 30 * numberOfTimePeriods;
    numberOfDays += 30
  ) {
    values.push({
      name: `Past ${numberOfDays} Days`,
      key: numberOfDays.toString(),
      value: numberOfDays,
    });
  }
  return {
    values: values,
    current: values[0],
    setCurrent: setCurrentTimePeriod,
  };
};

export const buildLocationSelectorValues = (
  currentLocation: LocationClass | undefined,
  setCurrentLocation: (value: Value | undefined) => void,
  locations: LocationClass[]
): SelectorValues => {
  const values: Value[] = locations.map((location) => {
    return {
      name: location.name,
      key: location.key,
      value: location,
    };
  });
  const current: Value | undefined = currentLocation
    ? {
        name: currentLocation.name,
        key: currentLocation.key,
        value: currentLocation,
      }
    : undefined;
  return {
    values: values,
    current: current,
    setCurrent: setCurrentLocation,
  };
};

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
