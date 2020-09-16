import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import {
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";
import {
  Chip,
  CircularProgress,
  Snackbar,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  buildTotalCasesGraphLineWithProperties,
  buildGraphColors,
  formatNumber,
  buildTotalDeathsGraphLineWithProperties,
  buildTotalTestsGraphLineWithProperties,
} from "./CovidTrackerUtils";
import { GraphLine } from "../../models/CovidTracker/graph/GraphLine";
import {
  getTerritoryHistoricalRecords,
  getRegionHistoricalRecords,
  getCountries,
  getTerritories,
  getRegions,
  getCountryHistoricalRecords,
} from "../../services/DrewRobertApi";
import "./CovidTracker.scss";
import { LocationClass } from "../../models/CovidTracker/api/LocationClass";
import { LocationHistoricalRecordsClass } from "../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { GraphLineWithProperties } from "../../models/CovidTracker/graph/GraphLinesWithProperties";
import { CovidTrackerLineGraph } from "./CovidTrackerLineGraph/CovidTrackerLineGraph";

const icon = (selected: boolean) => {
  return selected ? (
    <RadioButtonCheckedRounded className={"Radio selected"} />
  ) : (
    <RadioButtonUncheckedRounded />
  );
};

export interface CovidTrackerProps {
  country: string;
  territory?: string;
  region?: string;
}

const CovidTracker: React.FunctionComponent<CovidTrackerProps> = ({
  country,
  territory,
  region,
}) => {
  const [countries, setCountries] = useState<LocationClass[]>([]);
  const [territories, setTerritories] = useState<LocationClass[]>([]);
  const [regions, setRegions] = useState<LocationClass[]>([]);
  const [locations, setLocations] = useState<LocationClass[]>([]);
  const [locationHistoricalRecords, setLocationHistoricalRecords] = useState<
    LocationHistoricalRecordsClass
  >();
  const [totalCasesGraphLine, setTotalCasesGraphLine] = useState<
    GraphLineWithProperties
  >();
  const [totalDeathsGraphLine, setTotalDeathsGraphLine] = useState<
    GraphLineWithProperties
  >();
  const [totalTestsGraphLine, setTotalTestsGraphLine] = useState<
    GraphLineWithProperties
  >();
  const [graphData, setGraphData] = useState<GraphLineWithProperties[]>([]);
  const [showTotalCases, setShowTotalCases] = useState(true);
  const [showTotalDeaths, setShowTotalDeaths] = useState(true);
  const [showTotalTests, setShowTotalTests] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response.countries);
    });
  }, []);

  useEffect(() => {
    getTerritories(country).then((response) => {
      setTerritories(response.territories);
    });
    setLoading(true);
    getCountryHistoricalRecords(country).then((response) => {
      setLocationHistoricalRecords(response);
    });
    setLoading(false);
  }, [country]);

  useEffect(() => {
    if (territory) {
      getRegions(country, territory).then((response) => {
        setRegions(response.regions);
      });
      setLoading(true);
      getTerritoryHistoricalRecords(country, territory).then((response) => {
        setLocationHistoricalRecords(response);
      });
      setLoading(false);
    }
  }, [country, territory]);

  useEffect(() => {
    if (territory && region) {
      setLoading(true);
      getRegionHistoricalRecords(country, territory, region).then(
        (response) => {
          setLocationHistoricalRecords(response);
        }
      );
      setLoading(false);
    }
  }, [territory, region, country]);

  useEffect(() => {
    if (locationHistoricalRecords) {
      const records = locationHistoricalRecords.historicalRecords;
      setTotalDeathsGraphLine(
        buildTotalDeathsGraphLineWithProperties(records, showTotalDeaths)
      );
      setTotalCasesGraphLine(
        buildTotalCasesGraphLineWithProperties(records, showTotalCases)
      );
      setTotalTestsGraphLine(
        buildTotalTestsGraphLineWithProperties(records, showTotalTests)
      );
    }
  }, [
    locationHistoricalRecords,
    showTotalCases,
    showTotalDeaths,
    showTotalTests,
  ]);

  useEffect(() => {
    const newGraphData: GraphLineWithProperties[] = [];
    if (totalDeathsGraphLine) newGraphData.push(totalDeathsGraphLine);
    if (totalCasesGraphLine) newGraphData.push(totalCasesGraphLine);
    if (totalTestsGraphLine) newGraphData.push(totalTestsGraphLine);
    setGraphData(newGraphData);
  }, [totalDeathsGraphLine, totalCasesGraphLine, totalTestsGraphLine]);

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
          {!loading &&
            locationHistoricalRecords?.historicalRecords.length === 0 && (
              <Typography variant={"h6"}>
                No records available for{" "}
                {locationHistoricalRecords?.location.name}
              </Typography>
            )}
        </div>
        <div></div>
        <div>
          <CovidTrackerLineGraph
            location={locationHistoricalRecords?.location.name || "Unknown"}
            graphLineWithPropertiesList={graphData}
          />
        </div>
      </main>
    </div>
  );
};

export { CovidTracker };
