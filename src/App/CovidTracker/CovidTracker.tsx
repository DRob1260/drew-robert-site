import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { buildGraphData, formatNumber } from "./CovidTrackerUtils";
import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import {
  getIllinoisCountyCovidData,
  getIllinoisCovidData,
} from "../../services/DrewRobertApi";
import "./CovidTracker.scss";
import { RegionData } from "../../models/CovidTracker/api/RegionData";

const CovidTracker: React.FunctionComponent = () => {
  const [stateCovidData, setStateCovidData] = useState<RegionData>();
  const [countyCovidData, setCountyCovidData] = useState<RegionData>();
  const [regions, setRegions] = useState<string[]>([]);
  const [graphData, setGraphData] = useState<GraphLine[]>([]);

  useEffect(() => {
    getIllinoisCovidData()
      .then((regionData) => {
        setStateCovidData(regionData);
        setGraphData(buildGraphData(regionData.historicalRecords));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (stateCovidData) setRegions(stateCovidData.region.subRegions);
  }, [stateCovidData]);

  return (
    <div className={"CovidTracker"}>
      <main>
        <h1>Covid Tracker</h1>
        <div className={"Graph"}>
          <ResponsiveLine
            data={graphData}
            enableArea={true}
            curve={"monotoneX"}
            enablePointLabel={true}
            pointSize={16}
            pointBorderWidth={1}
            useMesh={true}
            animate={true}
            enableSlices={false}
            margin={{ top: 20, right: 20, bottom: 60, left: 100 }}
            pointColor={"#9131f7"}
            colors={["#9131f7"]}
            xScale={{
              type: "time",
              format: "%Y-%m-%d",
              useUTC: false,
              precision: "day",
            }}
            yScale={{
              type: "linear",
              stacked: false,
            }}
            xFormat="time:%Y-%m-%d"
            yFormat={(value) => {
              return formatNumber(Number(value));
            }}
            axisLeft={{
              legend: "Total",
              legendOffset: -80,
              format: (value) => {
                return formatNumber(Number(value));
              },
            }}
            axisBottom={{
              format: "%b %d",
              tickValues: "every 7 days",
              legend: "Date",
              legendOffset: 40,
            }}
          />
        </div>
      </main>
    </div>
  );
};

export { CovidTracker };
