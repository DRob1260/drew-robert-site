/* istanbul ignore file */
import { HistoricalRecord } from "./HistoricalRecord";

export interface RegionData {
  region: {
    name: string;
    lat: number;
    long: number;
    subRegions: Array<string>;
  };
  historicalRecords: Array<HistoricalRecord>;
}
