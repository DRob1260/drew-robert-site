/* istanbul ignore file */
import { rest } from "msw";
import { Urls } from "../config";
import {
  countries,
  illinoisRegions,
  unitedStatesTerritories,
} from "./covid/Locations";
import {
  illinoisHistoricalRecords,
  mcleanHistoricalRecords,
  unitedStatesHistoricalRecords,
} from "./covid/HistoricalRecords";

export const handlers = [
  // getCountries
  rest.get(
    `${Urls.covidApi}/covid/historicalRecords/country`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(countries));
    }
  ),

  // getTerritories
  rest.get(
    `${Urls.covidApi}/covid/historicalRecords/country/:country/territory`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(unitedStatesTerritories));
    }
  ),

  // getRegions
  rest.get(
    `${Urls.covidApi}/covid/historicalRecords/country/:country/territory/:territory/region`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(illinoisRegions));
    }
  ),

  //getCountryHistoricalRecords
  rest.get(
    `${Urls.covidApi}/covid/historicalRecords/country/:country`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(unitedStatesHistoricalRecords));
    }
  ),

  // getTerritoryHistoricalRecords
  rest.get(
    `${Urls.covidApi}/covid/historicalRecords/country/:country/territory/:territory`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(illinoisHistoricalRecords));
    }
  ),

  // getRegionHistoricalRecords
  rest.get(
    `${Urls.covidApi}/covid/historicalRecords/country/:country/territory/:territory/region/:region`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(mcleanHistoricalRecords));
    }
  ),
];
