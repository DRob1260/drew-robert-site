import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";
import { Chip } from "@material-ui/core";
import {
  buildGraphData,
  buildTotalCasesGraphLine,
  buildTotalDeathsGraphLine,
  buildTotalTestsGraphLines,
  buildGraphColors,
  formatNumber,
} from "./CovidTrackerUtils";
import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import {
  getIllinoisCountyCovidData,
  getIllinoisCovidData,
} from "../../services/DrewRobertApi";
import "./CovidTracker.scss";
import { RegionData } from "../../models/CovidTracker/api/RegionData";

const icon = (selected: boolean) => {
  return selected ? (
    <RadioButtonCheckedRounded className={"Radio selected"} />
  ) : (
    <RadioButtonUncheckedRounded />
  );
};

const CovidTracker: React.FunctionComponent = () => {
  const [stateCovidData, setStateCovidData] = useState<RegionData>();
  const [countyCovidData, setCountyCovidData] = useState<RegionData>();
  const [regions, setRegions] = useState<string[]>([]);
  const [totalCasesGraphLine, setTotalCasesGraphLine] = useState<GraphLine>();
  const [totalDeathsGraphLine, setTotalDeathsGraphLine] = useState<GraphLine>();
  const [totalTestsGraphLine, setTotalTestsGraphLine] = useState<GraphLine>();
  const [graphData, setGraphData] = useState<GraphLine[]>([]);
  const [showTotalCases, setShowTotalCases] = useState(true);
  const [showTotalDeaths, setShowTotalDeaths] = useState(true);
  const [showTotalTests, setShowTotalTests] = useState(false);

  useEffect(() => {
    getIllinoisCovidData()
      .then((regionData) => {
        setStateCovidData(regionData);
        const historicalRecords = regionData.historicalRecords;
        setTotalCasesGraphLine(buildTotalCasesGraphLine(historicalRecords));
        setTotalDeathsGraphLine(buildTotalDeathsGraphLine(historicalRecords));
        setTotalTestsGraphLine(buildTotalTestsGraphLines(historicalRecords));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setGraphData(
      buildGraphData(
        showTotalCases,
        showTotalDeaths,
        showTotalTests,
        totalCasesGraphLine,
        totalDeathsGraphLine,
        totalTestsGraphLine
      )
    );
  }, [
    showTotalCases,
    showTotalDeaths,
    showTotalTests,
    totalCasesGraphLine,
    totalDeathsGraphLine,
    totalTestsGraphLine,
  ]);

  useEffect(() => {
    if (stateCovidData) setRegions(stateCovidData.region.subRegions);
  }, [stateCovidData]);

  return (
    <div className={"CovidTracker"}>
      <main>
        <div className={"Graph-toolbar"}>
          <Chip
            className={`Chip totalDeaths ${showTotalDeaths ? "selected" : ""}`}
            label={"Total Deaths"}
            clickable={true}
            variant={"outlined"}
            size={"small"}
            icon={icon(showTotalDeaths)}
            onClick={(): void => setShowTotalDeaths(!showTotalDeaths)}
          />
          <Chip
            className={`Chip totalCases ${showTotalCases ? "selected" : ""}`}
            label={"Total Cases"}
            clickable={true}
            variant={"outlined"}
            size={"small"}
            icon={icon(showTotalCases)}
            onClick={(): void => setShowTotalCases(!showTotalCases)}
          />
          <Chip
            className={`Chip totalTests ${showTotalTests ? "selected" : ""}`}
            label={"Total Tests"}
            clickable={true}
            variant={"outlined"}
            size={"small"}
            icon={icon(showTotalTests)}
            onClick={(): void => setShowTotalTests(!showTotalTests)}
          />
        </div>
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
            // pointColor={"#9131f7"}
            colors={buildGraphColors(
              showTotalCases,
              showTotalDeaths,
              showTotalTests
            )}
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
