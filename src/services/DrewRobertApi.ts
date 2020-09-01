import { HistoricalRecord } from "../models/CovidTracker/api/HistoricalRecord";
import axios from "axios";

const getIllinoisHistoricalRecords = (): Promise<HistoricalRecord[]> => {
  return new Promise<HistoricalRecord[]>((resolve, reject) => {
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

export { getIllinoisHistoricalRecords };
