import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import "./LocationSelector.scss";
import { LocationClass } from "../../../models/CovidTracker/api/LocationClass";
import {
  getCountries,
  getRegions,
  getTerritories,
} from "../../../services/DrewRobertApi";
import { SelectedLocations } from "../../../models/CovidTracker/graph/SelectedLocations";

export interface LocationSelectorProps {
  changeSelectedCountry: (country?: LocationClass) => void;
  changeSelectedTerritory: (territory?: LocationClass) => void;
  changeSelectedRegion: (region?: LocationClass) => void;
}

export const LocationSelector: React.FunctionComponent<LocationSelectorProps> = ({
  changeSelectedCountry,
  changeSelectedTerritory,
  changeSelectedRegion,
}) => {
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentTerritory, setCurrentTerritory] = useState("");
  const [currentRegion, setCurrentRegion] = useState("");
  const [countries, setCountries] = useState<LocationClass[]>([]);
  const [territories, setTerritories] = useState<LocationClass[]>([]);
  const [regions, setRegions] = useState<LocationClass[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCountries().then((result) => {
      setCountries(result.countries);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (currentCountry) {
      setLoading(true);
      getTerritories(currentCountry).then((result) => {
        setTerritories(result.territories);
      });
      setLoading(false);
    }
  }, [currentCountry]);

  useEffect(() => {
    if (currentTerritory) {
      setLoading(true);
      getRegions(currentCountry, currentTerritory).then((result) => {
        setRegions(result.regions);
      });
      setLoading(false);
    } else {
      setCurrentRegion("");
    }
  }, [currentTerritory, currentCountry]);

  const handleCountryChange = (country?: LocationClass) => {
    setCurrentCountry(country?.key || "");
    changeSelectedCountry(country);
  };

  const handleTerritoryChange = (territory?: LocationClass) => {
    setCurrentTerritory(territory?.key || "");
    changeSelectedTerritory(territory);
  };

  const handleRegionChange = (region?: LocationClass) => {
    setCurrentRegion(region?.key || "");
    changeSelectedRegion(region);
  };

  return (
    <div className={"LocationSelector"}>
      {loading && <CircularProgress />}
      {!loading && (
        <div>
          <FormControl>
            <InputLabel id={"country-label"}>Country</InputLabel>
            <Select labelId={"country-label"} value={currentCountry}>
              <MenuItem
                value={""}
                onSelect={() => {
                  handleCountryChange(undefined);
                }}
              >
                none
              </MenuItem>
              {countries.map((country) => {
                return (
                  <MenuItem
                    value={country.key}
                    key={`LocationSelector-${country.key}`}
                    onSelect={() => handleCountryChange(country)}
                  >
                    {country.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {currentCountry && (
            <FormControl>
              <InputLabel id={"territory-label"}>Territory</InputLabel>
              <Select labelId={"territory-label"} value={currentTerritory}>
                <MenuItem
                  value={""}
                  onSelect={() => handleTerritoryChange(undefined)}
                >
                  none
                </MenuItem>
                {territories.map((territory) => {
                  return (
                    <MenuItem
                      value={territory.key}
                      key={`LocationSelector-${territory.key}`}
                      onSelect={() => handleTerritoryChange(territory)}
                    >
                      {territory.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}
          {currentTerritory && (
            <FormControl>
              <InputLabel id={"region-label"}>Region</InputLabel>
              <Select labelId={"region-label"} value={currentRegion}>
                <MenuItem
                  value={""}
                  onSelect={() => handleRegionChange(undefined)}
                >
                  none
                </MenuItem>
                {regions.map((region) => {
                  return (
                    <MenuItem
                      value={region.key}
                      key={`LocationSelector-${region.key}`}
                      onSelect={() => handleRegionChange(region)}
                    >
                      {region.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}
        </div>
      )}
    </div>
  );
};
