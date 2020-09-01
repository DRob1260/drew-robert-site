import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { buildGraphData } from "./CovidTrackerUtils";
import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import { getIllinoisHistoricalRecords } from "../../services/DrewRobertApi";
import "./CovidTracker.scss";
import { HistoricalRecord } from "../../models/CovidTracker/api/HistoricalRecord";

const CovidTracker: React.FunctionComponent = () => {
  const [illinoisHistoricalRecords, setIllinoisHistoricalRecords] = useState<
    HistoricalRecord[]
  >([]);
  const [graphData, setGraphData] = useState<GraphLine[]>([]);

  useEffect(() => {
    getIllinoisHistoricalRecords()
      .then((historicalRecords) => {
        setIllinoisHistoricalRecords(historicalRecords);
        console.log(illinoisHistoricalRecords);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setGraphData(buildGraphData(illinoisHistoricalRecords));
  }, [illinoisHistoricalRecords]);

  return (
    <div className={"CovidTracker"}>
      <main>
        <h1>Covid Tracker</h1>
        <div className={"Graph"}>
          <ResponsiveLine
            data={graphData}
            xScale={{
              type: "time",
              format: "%Y-%m-%d",
              useUTC: false,
              precision: "day",
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
              type: "linear",
              stacked: false,
            }}
            axisLeft={{
              legend: "Total",
              legendOffset: 12,
            }}
            axisBottom={{
              format: "%b %d",
              tickValues: "every 1 day",
              legend: "Date",
              legendOffset: -12,
            }}
            enableArea={true}
            curve={"monotoneX"}
            enablePointLabel={true}
            pointSize={16}
            pointBorderWidth={1}
            useMesh={true}
            animate={true}
            // height={400}
            // width={1000}
            enableSlices={"x"}
            margin={{ top: 20, right: 20, bottom: 60, left: 50 }}
            pointColor={"#9131f7"}
            colors={["#9131f7"]}
          />
        </div>
      </main>
    </div>
  );
};

export { CovidTracker };
