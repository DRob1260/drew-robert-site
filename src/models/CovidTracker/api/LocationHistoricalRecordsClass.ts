import { LocationClass } from "./LocationClass";

export class LocationHistoricalRecordsClass {
  location: LocationClass;
  subLocations: LocationClass[];
  historicalRecords: HistoricalRecord[];

  constructor() {
    this.location = new LocationClass();
    this.subLocations = [];
    this.historicalRecords = [];
  }
}

export interface HistoricalRecord {
  testDate: string;
  totals: {
    cases: number;
    tested: number;
    deaths: number;
  };
}
