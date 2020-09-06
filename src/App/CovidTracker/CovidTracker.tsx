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

  // @ts-ignore
  return (
    <div className={"CovidTracker"}>
      <main>
        <h1 className={"text"}>COVID-19 Metrics Tracker</h1>
        {loading && (
          <div id={"loading-indicator-container"}>
            <CircularProgress />
          </div>
        )}
        <div className={"toolbar"}>
          <Button
            className={"region-button"}
            variant={"contained"}
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
          <div>
            <Chip
              className={`Chip totalDeaths ${
                showTotalDeaths ? "selected" : ""
              }`}
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
        </div>
        <div className={"Graph"}>
          <p
            id={"Graph-label"}
          >{`Graph of COVID-19 data for the ${currentRegion} region.`}</p>
          <ResponsiveLine
            aria-labelledby={"Graph-label"}
            data={graphData}
            enablePointLabel={false}
            enableArea={true}
            curve={"monotoneX"}
            pointSize={16}
            pointBorderWidth={1}
            useMesh={true}
            animate={true}
            enableSlices={"x"}
            margin={{ top: 20, right: 15, bottom: 60, left: 50 }}
            colors={buildGraphColors(
              showTotalCases,
              showTotalDeaths,
              showTotalTests
            )}
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
      </main>
    </div>
  );
};

export { CovidTracker };
