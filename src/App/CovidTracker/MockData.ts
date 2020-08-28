import { ApiDataPoint } from "../../models/CovidTracker/api/ApiDataPoint";

const mockDataPoints = (numberOfDataPoints: number): ApiDataPoint[] => {
  const initialDataPoint = {
    provinceState: "Illinois",
    countryRegion: "US",
    combinedKey: "McLean, Illinois, US",
    iso3: "USA",
    lastUpdate: 1598664501000,
    confirmed: 2,
    recovered: 1,
    deaths: 1,
    active: 1363,
    uid: 84017113,
    fips: "17113",
    admin2: "McLean",
    lat: 40.48996987,
    long: -88.84621113,
    incidentRate: 1,
    peopleTested: null,
    peopleHospitalized: null,
  };
  const dataPoints: ApiDataPoint[] = [mockDataPoint(initialDataPoint)];
  for (let i = 1; i < numberOfDataPoints; i++) {
    dataPoints.push(mockDataPoint(dataPoints[i - 1]));
  }
  return dataPoints;
};

const mockDataPoint = (previousDataPoint: ApiDataPoint): ApiDataPoint => {
  return {
    provinceState: previousDataPoint.provinceState,
    countryRegion: previousDataPoint.countryRegion,
    combinedKey: previousDataPoint.combinedKey,
    iso3: previousDataPoint.iso3,
    lastUpdate: nextDay(new Date(previousDataPoint.lastUpdate)),
    confirmed: Math.round(previousDataPoint.confirmed * (1 + Math.random())),
    recovered: 0,
    deaths: Math.round(previousDataPoint.deaths * (1 + Math.random())),
    active: Math.round(previousDataPoint.active * (1 + Math.random())),
    uid: previousDataPoint.uid,
    fips: previousDataPoint.fips,
    admin2: previousDataPoint.admin2,
    lat: previousDataPoint.lat,
    long: previousDataPoint.long,
    incidentRate: (previousDataPoint.incidentRate || 1) * (1 + Math.random()),
    peopleTested: null,
    peopleHospitalized: null,
  };
};

const nextDay = (date: Date) => {
  date.setDate(date.getDate() + 1);
  return date.getTime();
};

export { mockDataPoints };
