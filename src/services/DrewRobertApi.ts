import axios from "axios";
import { RegionData } from "../models/CovidTracker/api/RegionData";

const getIllinoisCovidData = (): Promise<RegionData> => {
  return new Promise<RegionData>((resolve, reject) => {
    axios
      .get("http://localhost:8080/covid/country/usa/state/il")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getIllinoisCountyCovidData = (
  county: string
): Promise<RegionData> => {
  return new Promise<RegionData>((resolve, reject) => {
    axios
      .get(`http://localhost:8080/covid/country/usa/state/il/county/${county}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getIllinoisCovidData, getIllinoisCountyCovidData };