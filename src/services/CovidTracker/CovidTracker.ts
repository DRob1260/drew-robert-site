import axios from "axios";
import { IllinoisCovidMetrics } from "../../models/CovidTracker/IllinoisCovidMetrics/IllinoisCovidMetrics";

const getIllinoisCovidMetrics = (): Promise<IllinoisCovidMetrics> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://dph.illinois.gov/sitefiles/COVIDCountyRiskMetrics.json?nocache=1"
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getIllinoisCovidMetrics };
