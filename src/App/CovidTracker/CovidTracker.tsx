import React, { useEffect, useState } from "react";
import {
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";
import {
  Chip,
  CircularProgress,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  buildLocationSelectorValues,
  buildTotalCasesGraphLineWithProperties,
  buildTotalDeathsGraphLineWithProperties,
  buildTotalTestsGraphLineWithProperties,
} from "./CovidTrackerUtils";
import {
  getTerritoryHistoricalRecords,
  getRegionHistoricalRecords,
  getCountries,
  getTerritories,
  getRegions,
  getCountryHistoricalRecords,
} from "../../services/DrewRobertApi";
import { LocationHistoricalRecordsClass } from "../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { GraphLineWithProperties } from "../../models/CovidTracker/graph/GraphLinesWithProperties";
import { CovidTrackerLineGraph } from "./CovidTrackerLineGraph/CovidTrackerLineGraph";
import { LocationSelector } from "./LocationSelector/LocationSelector";
import "./CovidTracker.scss";
import { SelectorValues, Value } from "../Inputs/Selector/Selector";

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
  const [currentCountryValue, setCurrentCountryValue] = useState<
    Value | undefined
  >();
  const [countrySelectorValues, setCountrySelectorValues] = useState<
    SelectorValues
  >();
  const [currentTerritoryValue, setCurrentTerritoryValue] = useState<
    Value | undefined
  >();
  const [territorySelectorValues, setTerritorySelectorValues] = useState<
    SelectorValues
  >();
  const [currentRegionValue, setCurrentRegionValue] = useState<
    Value | undefined
  >();
  const [regionSelectorValues, setRegionSelectorValues] = useState<
    SelectorValues
  >();
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

  const history = useHistory();

  // retrieve countries
  useEffect(() => {
    getCountries().then((response) => {
      const countryLocationClass = response.countries.find(
        (c) => c.key === country
      );
      setCountrySelectorValues(
        buildLocationSelectorValues(
          countryLocationClass,
          setCurrentCountryValue,
          response.countries
        )
      );
    });
  }, [country]);

  // retrieve territories
  useEffect(() => {
    getTerritories(country).then((response) => {
      const territoryLocationClass = response.territories.find(
        (t) => t.key === territory
      );
      setTerritorySelectorValues(
        buildLocationSelectorValues(
          territoryLocationClass,
          setCurrentTerritoryValue,
          response.territories
        )
      );
    });
  }, [country, territory]);

  // retrieve regions
  useEffect(() => {
    if (territory) {
      getRegions(country, territory).then((response) => {
        const regionLocationClass = response.regions.find(
          (r) => r.key === region
        );
        setRegionSelectorValues(
          buildLocationSelectorValues(
            regionLocationClass,
            setCurrentRegionValue,
            response.regions
          )
        );
      });
    }
  }, [country, region, territory]);

  // retrieve countryHistoricalRecords
  useEffect(() => {
    if (!territory) {
      setLoading(true);
      getCountryHistoricalRecords(country)
        .then((response) => {
          setLocationHistoricalRecords(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  }, [country, territory]);

  // retrieve territoryHistoricalRecords
  useEffect(() => {
    if (territory && !region) {
      setLoading(true);
      getTerritoryHistoricalRecords(country, territory)
        .then((response) => {
          setLocationHistoricalRecords(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  }, [country, region, territory]);

  // retrieve regionHistoricalRecords
  useEffect(() => {
    if (territory && region) {
      setLoading(true);
      getRegionHistoricalRecords(country, territory, region)
        .then((response) => {
          setLocationHistoricalRecords(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  }, [territory, region, country]);

  // set graphLines
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

  // set graphData
  useEffect(() => {
    const newGraphData: GraphLineWithProperties[] = [];
    if (totalDeathsGraphLine) newGraphData.push(totalDeathsGraphLine);
    if (totalCasesGraphLine) newGraphData.push(totalCasesGraphLine);
    if (totalTestsGraphLine) newGraphData.push(totalTestsGraphLine);
    setGraphData(newGraphData);
  }, [totalDeathsGraphLine, totalCasesGraphLine, totalTestsGraphLine]);

  // route to path for location changes
  useEffect(() => {
    if (currentCountryValue && currentTerritoryValue) {
      // if currentRegionValue is unset
      if (!currentRegionValue && region) {
        history.push(
          `/covid/${currentCountryValue.key}/${currentTerritoryValue.key}`
        );
      }
      if (currentRegionValue && currentRegionValue.key !== region)
        history.push(
          `/covid/${currentCountryValue.key}/${currentTerritoryValue.key}/${currentRegionValue.key}`
        );
    } else if (
      currentCountryValue &&
      currentTerritoryValue &&
      currentTerritoryValue.key !== territory
    ) {
      history.push(
        `/covid/${currentCountryValue.key}/${currentTerritoryValue.key}`
      );
    } else if (currentCountryValue && currentCountryValue.key !== country) {
      history.push(`/covid/${currentCountryValue.key}`);
    }
  }, [
    country,
    currentCountryValue,
    currentRegionValue,
    currentTerritoryValue,
    history,
    region,
    territory,
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
          <LocationSelector
            countryValues={countrySelectorValues}
            territoryValues={territorySelectorValues}
            regionValues={regionSelectorValues}
          />
          <div id={"Chips"}>
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
