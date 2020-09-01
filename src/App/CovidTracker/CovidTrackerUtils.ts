import { ApiDataPoint } from "../../models/CovidTracker/api/ApiDataPoint";
import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import { GraphDataPoint } from "../../models/CovidTracker/graph/GraphDataPoint";

const buildGraphData = (apiDataPoints: ApiDataPoint[]): GraphLine[] => {
  const confirmedCasesGraphDataPoints: GraphDataPoint[] = apiDataPoints.map(
    (apiDataPoint) => {
      return {
        x: formatDate(new Date(apiDataPoint.lastUpdate)),
        y: apiDataPoint.confirmed,
      };
    }
  );
  return [
    {
      id: "Confirmed Cases",
      data: confirmedCasesGraphDataPoints,
    },
  ];
};

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export { buildGraphData };
