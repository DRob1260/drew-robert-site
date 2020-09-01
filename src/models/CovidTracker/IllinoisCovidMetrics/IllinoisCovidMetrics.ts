export interface IllinoisCovidMetrics {
  LastUpdateDate: LastUpdateDate;
  CurrentMMWRWeek: string;
  PriorMMWRWeek: string;
  Prior2MMWRWeek: string;
  historical_county: HistoricalCounty;
  state_testing_results: StateTestingResults;
  testPositivity: TestPositivity[];
  icuAvailAvg: IcuAvailAvg[];
  historical_demographics: HistoricalDemographic[];
}

export interface LastUpdateDate {
  periodBeginYear: number;
  periodBeginMonth: number;
  periodBeginDay: number;
  year: number;
  month: number;
  day: number;
  mmwrWeekNumber: number;
  lastUpdatedYear: number;
  lastUpdatedMonth: number;
  lastUpdatedDay: number;
}

export interface HistoricalCounty {
  values: Array<{
    testDate: string;
    values: Array<{
      County: string;
      confirmed_cases: number;
      total_tested: number;
      deaths: number;
      lat: number;
      lon: number;
    }>;
  }>;
}

export interface StateTestingResults {
  values: Array<{
    testDate: string;
    total_tested: number;
    confirmed_cases: number;
    deaths: number;
  }>;
}

export interface TestPositivity {
  report_date: string;
  values: Array<{
    County: string;
    testPositivity: number;
    clusterPct: any;
  }>;
}

export interface IcuAvailAvg {
  report_date: string;
  values: Array<{
    id: number;
    ICUAvail: number;
  }>;
}

export interface Age {
  age_group: string;
  count: number;
  tested: number;
}

export interface Race {
  description: string;
  count: number;
  tested: number;
  color: string;
}

export interface Gender {
  description: string;
  count: number;
  tested: number;
  color: string;
}

export interface Demographics {
  age: Age[];
  race: Race[];
  gender: Gender[];
}

export interface CountyDemographic {
  County: string;
  confirmed_cases: number;
  total_tested: number;
  demographics: Demographics;
}

export interface HistoricalDemographic {
  reported_date: string;
  county_demographics: CountyDemographic[];
}
