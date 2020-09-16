import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import { GraphDataPoint } from "../../models/CovidTracker/graph/GraphDataPoint";
import { HistoricalRecord } from "../../models/CovidTracker/api/HistoricalRecord";
import { GraphLineWithProperties } from "../../models/CovidTracker/graph/GraphLinesWithProperties";

const buildTotalCasesGraphLineWithProperties = (
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

const buildTotalDeathsGraphLineWithProperties = (
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

const buildTotalTestsGraphLineWithProperties = (
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

const buildGraphColors = (
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

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const formatNumber = (num: number): string => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export {
  buildTotalCasesGraphLineWithProperties,
  buildTotalDeathsGraphLineWithProperties,
  buildTotalTestsGraphLineWithProperties,
  buildGraphColors,
  formatNumber,
};
