import React, { useEffect, useState } from "react";
import {
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";
import {
  Chip,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
  IconButton,
  Link,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import {
  buildLocationSelectorValues,
  buildTimePeriodSelectorValues,
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
} from "../../services/CovidApi";
import {
  HistoricalRecord,
  LocationHistoricalRecordsClass,
} from "../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { GraphLineWithProperties } from "../../models/CovidTracker/graph/GraphLinesWithProperties";
import { CovidTrackerLineGraph } from "./CovidTrackerLineGraph/CovidTrackerLineGraph";
import { CovidTrackerSelectors } from "./CovidTrackerSelectors/CovidTrackerSelectors";
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
  const [currentTimePeriodValue, setCurrentTimePeriodValue] = useState<
    Value | undefined
  >();
  const [timePeriodSelectorValues, setTimePeriodSelectorValues] = useState<
    SelectorValues
  >();
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

  // set time period
  useEffect(() => {
    if (locationHistoricalRecords) {
      const records = locationHistoricalRecords.historicalRecords;
      setTimePeriodSelectorValues(
        buildTimePeriodSelectorValues(records.length, setCurrentTimePeriodValue)
      );
    }
  }, [locationHistoricalRecords]);

  // set graph lines
  useEffect(() => {
    if (currentTimePeriodValue && locationHistoricalRecords) {
      const sortedHistoricalRecords = locationHistoricalRecords.historicalRecords.sort(
        (a, b) => {
          // @ts-ignore
          return new Date(b.testDate) - new Date(a.testDate);
        }
      );
      const timePeriodRecords: HistoricalRecord[] = sortedHistoricalRecords.slice(
        0,
        currentTimePeriodValue.value
      );
      setTotalDeathsGraphLine(
        buildTotalDeathsGraphLineWithProperties(
          timePeriodRecords,
          showTotalDeaths
        )
      );
      setTotalCasesGraphLine(
        buildTotalCasesGraphLineWithProperties(
          timePeriodRecords,
          showTotalCases
        )
      );
      setTotalTestsGraphLine(
        buildTotalTestsGraphLineWithProperties(
          timePeriodRecords,
          showTotalTests
        )
      );
    }
  }, [
    currentTimePeriodValue,
    showTotalDeaths,
    showTotalCases,
    showTotalTests,
    locationHistoricalRecords,
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
        <Grid container>
          <Grid item xs={10}>
            <h1 className={"text"}>COVID-19 Metrics Tracker</h1>
          </Grid>
          <Grid item xs={2}>
            <div className={"info-icon-container"}>
              <IconButton
                href={"#about"}
                aria-label={"More information on COVID-19 Metrics Tracker"}
                data-testid={"info-button"}
              >
                <InfoIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
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
          <CovidTrackerSelectors
            timePeriodValues={timePeriodSelectorValues}
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
        <div id={"about"} data-testid={"about"}>
          <h2>About</h2>
          <h3>Features</h3>
          <p>
            Currently, the COVID-19 Metrics Tracker provides a graph displaying
            total deaths, total cases, and total tests for Illinois and regions
            within Illinois. More data or features may be added in the future.
          </p>
          <h3>Data</h3>
          <p>
            All current data in this project is retrieved from the Illinois
            Department of Public Health. It uses the most recent data that is
            available from their website. More information is available at
            &nbsp;
            <Link
              href={"https://www.dph.illinois.gov/covid19"}
              target={"_blank"}
            >
              www.dph.illinois.gov/covid19
            </Link>
            .
          </p>
          <h3>Feedback</h3>
          <p>
            If you run into any problems or have any questions, feel free to
            reach out to me at{" "}
            <Link href={"mailto:drew.robert26@me.com"}>
              drew.robert26@me.com
            </Link>
            .
          </p>
          <h3>Technical Information</h3>
          <p>
            {
              "This project uses several open-source projects, including Express, React, Material UI, Nivo, and more. If you're interested, check out its "
            }
            <Link
              href={"https://github.com/DRob1260/drew-robert-site"}
              target={"_blank"}
            >
              GitHub repo
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export { CovidTracker };
