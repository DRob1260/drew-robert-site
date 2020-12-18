/* istanbul ignore file */
import axios from "axios";
import { Urls } from "../../config";
import { LocationHistoricalRecordsClass } from "../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { LocationClass } from "../../models/CovidTracker/api/LocationClass";

export const getCountries = (): Promise<{
  countries: LocationClass[];
  territory: string;
}> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${Urls.covidApi}/historicalRecords/country`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCountryHistoricalRecords = (
  country: string
): Promise<LocationHistoricalRecordsClass> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${Urls.covidApi}/historicalRecords/country/${country}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTerritories = (
  country: string
): Promise<{
  territories: LocationClass[];
  region: "/";
}> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${Urls.covidApi}/historicalRecords/country/${country}/territory`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTerritoryHistoricalRecords = (
  country: string,
  territory: string
): Promise<LocationHistoricalRecordsClass> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${Urls.covidApi}/historicalRecords/country/${country}/territory/${territory}`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getRegions = (
  country: string,
  territory: string
): Promise<{
  regions: LocationClass[];
}> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${Urls.covidApi}/historicalRecords/country/${country}/territory/${territory}/region`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getRegionHistoricalRecords = (
  country: string,
  territory: string,
  region: string
): Promise<LocationHistoricalRecordsClass> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${Urls.covidApi}/historicalRecords/country/${country}/territory/${territory}/region/${region}`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
