import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";
import {
  Chip,
  Menu,
  MenuItem,
  Button,
  CircularProgress,
} from "@material-ui/core";
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

const icon = (selected: boolean) => {
  return selected ? (
    <RadioButtonCheckedRounded className={"Radio selected"} />
  ) : (
    <RadioButtonUncheckedRounded />
  );
};

const CovidTracker: React.FunctionComponent = () => {
  const [regions, setRegions] = useState<string[]>([]);
  const [currentRegion, setCurrentRegion] = useState<string>();
  const [totalCasesGraphLine, setTotalCasesGraphLine] = useState<GraphLine>();
  const [totalDeathsGraphLine, setTotalDeathsGraphLine] = useState<GraphLine>();
  const [totalTestsGraphLine, setTotalTestsGraphLine] = useState<GraphLine>();
  const [graphData, setGraphData] = useState<GraphLine[]>([]);
  const [showTotalCases, setShowTotalCases] = useState(true);
  const [showTotalDeaths, setShowTotalDeaths] = useState(true);
  const [showTotalTests, setShowTotalTests] = useState(false);
  const [showRegionMenu, setShowRegionMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  // initial page load
  useEffect(() => {
    setLoading(true);
    getIllinoisCovidData()
      .then((regionData) => {
        const historicalRecords = regionData.historicalRecords;
        setTotalCasesGraphLine(buildTotalCasesGraphLine(historicalRecords));
        setTotalDeathsGraphLine(buildTotalDeathsGraphLine(historicalRecords));
        setTotalTestsGraphLine(buildTotalTestsGraphLines(historicalRecords));
        setRegions(regionData.region.subRegions);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // when currentRegion changes
  useEffect(() => {
    setLoading(true);
    if (currentRegion) {
      getIllinoisCountyCovidData(currentRegion)
        .then((regionData) => {
          const historicalRecords = regionData.historicalRecords;
          setTotalCasesGraphLine(buildTotalCasesGraphLine(historicalRecords));
          setTotalDeathsGraphLine(buildTotalDeathsGraphLine(historicalRecords));
          setTotalTestsGraphLine(buildTotalTestsGraphLines(historicalRecords));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentRegion]);

  // when a GraphLine or showTotal* changes
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

  return (
    <div className={"CovidTracker"}>
      {loading && (
        <div id={"loading-indicator-container"}>
          <CircularProgress />
        </div>
      )}
      <main>
        <div className={"toolbar"}>
          <Button
            className={"region-button"}
            variant={"contained"}
            size={"small"}
            aria-controls={"region-menu"}
            aria-haspopup={"true"}
            onClick={() => setShowRegionMenu(!showRegionMenu)}
          >
            {currentRegion || "Illinois"}
          </Button>
          <Menu
            id={"region-menu"}
            keepMounted
            open={showRegionMenu}
            onClose={() => setShowRegionMenu(false)}
          >
            <MenuItem
              onClick={() => {
                setCurrentRegion("Illinois");
                setShowRegionMenu(false);
              }}
            >
              Illinois
            </MenuItem>
            {regions.map((region) => (
              <MenuItem
                key={region}
                onClick={() => {
                  setCurrentRegion(region);
                  setShowRegionMenu(false);
                }}
              >
                {region}
              </MenuItem>
            ))}
          </Menu>
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
            xFormat={"time:%Y-%m-%d"}
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
