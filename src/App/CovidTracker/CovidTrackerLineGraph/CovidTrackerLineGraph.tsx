import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { formatNumber } from "../CovidTrackerUtils";
import { GraphLine } from "../../../models/CovidTracker/graph/GraphLine";
import { GraphLineWithProperties } from "../../../models/CovidTracker/graph/GraphLinesWithProperties";
import "./CovidTrackerLineGraph.scss";

export interface CovidTrackerLineGraphProps {
  location: string;
  graphLineWithPropertiesList: GraphLineWithProperties[];
}

export const CovidTrackerLineGraph: React.FunctionComponent<CovidTrackerLineGraphProps> = ({
  location,
  graphLineWithPropertiesList,
}) => {
  const [data, setData] = useState<GraphLine[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const newData: GraphLine[] = [];
    const newColors: string[] = [];
    graphLineWithPropertiesList.forEach((g) => {
      if (g.show) {
        newData.push(g.graphLine);
        newColors.push(g.color);
      }
    });
    setData(newData);
    setColors(newColors);
  }, [graphLineWithPropertiesList]);

  return (
    <div className={"CovidTrackerLineGraph"}>
      <p id={"Graph-label"}>{`Graph of COVID-19 data for ${location}.`}</p>
      <ResponsiveLine
        aria-labelledby={"Graph-label"}
        data={data}
        enablePointLabel={false}
        enableArea={true}
        curve={"monotoneX"}
        pointSize={5}
        pointBorderWidth={1}
        useMesh={true}
        animate={true}
        enableSlices={"x"}
        margin={{ top: 20, right: 15, bottom: 60, left: 60 }}
        colors={colors}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
        }}
        yScale={{
          type: "linear",
          stacked: false,
        }}
        xFormat={"time:%Y-%m-%d"}
        yFormat={(value) => {
          return formatNumber(Number(value));
        }}
        axisLeft={{
          legendOffset: -80,
          tickRotation: -45,
          tickPadding: 15,
          format: (value) => {
            return formatNumber(Number(value));
          },
        }}
        axisBottom={{
          format: "%b %d",
          tickRotation: -45,
          tickPadding: 15,
        }}
      />
    </div>
  );
};
