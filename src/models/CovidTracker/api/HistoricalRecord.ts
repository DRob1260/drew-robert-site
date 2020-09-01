export interface HistoricalRecord {
  testDate: string;
  region: string;
  totals: {
    cases: number;
    tested: number;
    deaths: number;
  };
  lat: number;
  long: number;
}
