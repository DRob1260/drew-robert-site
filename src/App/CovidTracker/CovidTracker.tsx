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
  Snackbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
  getRegionCovidData,
  getStateCovidData,
} from "../../services/DrewRobertApi";
import "./CovidTracker.scss";

const icon = (selected: boolean) => {
  return selected ? (
    <RadioButtonCheckedRounded className={"Radio selected"} />
  ) : (
    <RadioButtonUncheckedRounded />
  );
};

const CovidTracker: React.FunctionComponent<{
  country: string;
  state: string;
  region: string;
}> = ({ country, state, region }) => {
  const [regions, setRegions] = useState<string[]>([]);
  const [totalCasesGraphLine, setTotalCasesGraphLine] = useState<GraphLine>();
  const [totalDeathsGraphLine, setTotalDeathsGraphLine] = useState<GraphLine>();
  const [totalTestsGraphLine, setTotalTestsGraphLine] = useState<GraphLine>();
  const [graphData, setGraphData] = useState<GraphLine[]>([]);
  const [showTotalCases, setShowTotalCases] = useState(true);
  const [showTotalDeaths, setShowTotalDeaths] = useState(true);
  const [showTotalTests, setShowTotalTests] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [
    regionMenuAnchor,
    setRegionMenuAnchor,
  ] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    setLoading(true);
    getStateCovidData(country, state)
      .then((regionData) => {
        setRegions(regionData.region.subRegions);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [country, state]);

  useEffect(() => {
    setLoading(true);
    getRegionCovidData(country, state, region)
      .then((regionData) => {
        const regionHistoricalRecords = regionData.historicalRecords;
        setTotalTestsGraphLine(
          buildTotalTestsGraphLines(regionHistoricalRecords)
        );
        setTotalCasesGraphLine(
          buildTotalCasesGraphLine(regionHistoricalRecords)
        );
        setTotalDeathsGraphLine(
          buildTotalDeathsGraphLine(regionHistoricalRecords)
        );
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [country, region, state]);

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
    <div className={"CovidTracker"} data-testid={"CovidTracker"}>
      <main>
        <h1 className={"text"}>COVID-19 Metrics Tracker</h1>
        {loading && !error && (
          <div
            id={"loading-indicator-container"}
            data-testid={"loading-indicator-container"}
          >
            <CircularProgress />
          </div>
        )}
        <Snackbar
          data-testid={"error-message"}
          open={error}
          onClose={() => setError(false)}
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          message={"An error occurred while retrieving COVID-19 data."}
        />
        <div className={"toolbar"}>
          <Button
            className={"region-button"}
            data-testid={"region-button"}
            variant={"contained"}
            aria-controls={"region-menu"}
            aria-haspopup={"true"}
            onClick={(event) => setRegionMenuAnchor(event.currentTarget)}
          >
            {region || state}
          </Button>
          <Menu
            id={"region-menu"}
            anchorEl={regionMenuAnchor}
            keepMounted
            open={Boolean(regionMenuAnchor)}
            onClose={() => setRegionMenuAnchor(null)}
          >
            <MenuItem
              onClick={() => {
                setRegionMenuAnchor(null);
              }}
            >
              <Link to={`/covid/${country}/${state}/Illinois`}>Illinois</Link>
            </MenuItem>
            {regions.map((region) => (
              <MenuItem
                key={region}
                onClick={() => {
                  setRegionMenuAnchor(null);
                }}
              >
                <Link to={`/covid/${country}/${state}/${region}`}>
                  {region}
                </Link>
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
          >{`Graph of COVID-19 data for the ${region} region.`}</p>
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
            margin={{ top: 20, right: 15, bottom: 60, left: 60 }}
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
