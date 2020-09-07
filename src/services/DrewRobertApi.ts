/* istanbul ignore file */
import axios from "axios";
import { RegionData } from "../models/CovidTracker/api/RegionData";
import { Urls } from "../config";

const getStateCovidData = (
  country: string,
  state: string
): Promise<RegionData> => {
  return new Promise<RegionData>((resolve, reject) => {
    axios
      .get(`${Urls.drewRobertApi}/covid/country/${country}/state/${state}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getRegionCovidData = (
  country: string,
  state: string,
  region: string
): Promise<RegionData> => {
  return new Promise<RegionData>((resolve, reject) => {
    axios
      .get(
        `${Urls.drewRobertApi}/covid/country/${country}/state/${state}/county/${region}`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getStateCovidData, getRegionCovidData };
