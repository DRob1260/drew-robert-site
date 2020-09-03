import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import { GraphDataPoint } from "../../models/CovidTracker/graph/GraphDataPoint";
import { HistoricalRecord } from "../../models/CovidTracker/api/HistoricalRecord";

const buildGraphData = (apiData: HistoricalRecord[]): GraphLine[] => {
  const totalCasesGraphDataPoints: GraphDataPoint[] = apiData.map((apiData) => {
    return {
      x: formatDate(new Date(apiData.testDate)),
      y: apiData.totals.cases,
    };
  });
  const totalDeathsGraphDataPoints: GraphDataPoint[] = apiData.map(
    (apiData) => {
      return {
        x: formatDate(new Date(apiData.testDate)),
        y: apiData.totals.deaths,
      };
    }
  );
  const totalTestsGraphDataPoints: GraphDataPoint[] = apiData.map((apiData) => {
    return {
      x: formatDate(new Date(apiData.testDate)),
      y: apiData.totals.tested,
    };
  });

  return [
    {
      id: "Total Cases",
      data: totalCasesGraphDataPoints,
    },
    {
      id: "Total Deaths",
      data: totalDeathsGraphDataPoints,
    },
    {
      id: "Total Tests",
      data: totalTestsGraphDataPoints,
    },
  ];
};

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const formatNumber = (num: number): string => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export { buildGraphData, formatNumber };
