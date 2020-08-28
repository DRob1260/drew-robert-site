export interface ApiDataPoint {
  provinceState: string;
  countryRegion: string;
  combinedKey: string;
  iso3: string;
  lastUpdate: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
  uid: number;
  fips: string | null;
  admin2: string | null;
  lat: number | null;
  long: number | null;
  incidentRate: number | null;
  peopleTested: number | null;
  peopleHospitalized: number | null;
}
