/* istanbul ignore file */
export interface HistoricalRecord {
  testDate: string;
  totals: {
    cases: number;
    tested: number;
    deaths: number;
  };
}
