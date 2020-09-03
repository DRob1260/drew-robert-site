import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import { GraphDataPoint } from "../../models/CovidTracker/graph/GraphDataPoint";
import { HistoricalRecord } from "../../models/CovidTracker/api/HistoricalRecord";

const buildTotalCasesGraphLine = (apiData: HistoricalRecord[]): GraphLine => {
  const totalCasesGraphDataPoints: GraphDataPoint[] = apiData.map((apiData) => {
    return {
      x: formatDate(new Date(apiData.testDate)),
      y: apiData.totals.cases,
    };
  });

  return {
    id: "Total Cases",
    data: totalCasesGraphDataPoints,
  };
};

const buildTotalDeathsGraphLine = (apiData: HistoricalRecord[]): GraphLine => {
  const totalDeathsGraphDataPoints: GraphDataPoint[] = apiData.map(
    (apiData) => {
      return {
        x: formatDate(new Date(apiData.testDate)),
        y: apiData.totals.deaths,
      };
    }
  );

  return {
    id: "Total Deaths",
    data: totalDeathsGraphDataPoints,
  };
};

const buildTotalTestsGraphLines = (apiData: HistoricalRecord[]): GraphLine => {
  const totalTestsGraphDataPoints: GraphDataPoint[] = apiData.map((apiData) => {
    return {
      x: formatDate(new Date(apiData.testDate)),
      y: apiData.totals.tested,
    };
  });

  return {
    id: "Total Tests",
    data: totalTestsGraphDataPoints,
  };
};

const buildGraphData = (
  showTotalCases: boolean,
  showTotalDeaths: boolean,
  showTotalTests: boolean,
  totalCasesGraphLine: GraphLine | undefined,
  totalDeathsGraphLine: GraphLine | undefined,
  totalTestsGraphLine: GraphLine | undefined
): GraphLine[] => {
  const graphLines: GraphLine[] = [];

  if (showTotalCases && totalCasesGraphLine)
    graphLines.push(totalCasesGraphLine);

  if (showTotalDeaths && totalDeathsGraphLine)
    graphLines.push(totalDeathsGraphLine);

  if (showTotalTests && totalTestsGraphLine)
    graphLines.push(totalTestsGraphLine);

  return graphLines;
};

const buildGraphColors = (
  showTotalCases: boolean,
  showTotalDeaths: boolean,
  showTotalTests: boolean
): string[] => {
  const colors: string[] = [];
  // the order here should match the order that the GraphLines are pushed in buildGraphData
  if (showTotalCases) colors.push("#00C2AD");

  if (showTotalDeaths) colors.push("#008B79");

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
  buildTotalCasesGraphLine,
  buildTotalDeathsGraphLine,
  buildTotalTestsGraphLines,
  buildGraphData,
  buildGraphColors,
  formatNumber,
};
