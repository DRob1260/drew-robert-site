/* istanbul ignore file */
import { rest } from "msw";
import { Urls } from "../config";
import {
  IllinoisRegionData,
  IllinoisCountyRegionData,
} from "./CovidTracker/MockRegionData";

export const handlers = [
  // getIllinoisCovidData
  rest.get(
    `${Urls.drewRobertApi}/covid/country/usa/state/il`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(IllinoisRegionData));
    }
  ),

  // getIllinoisCountyCovidData
  rest.get(
    `${Urls.drewRobertApi}/covid/country/usa/state/il/county/*`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.body(IllinoisCountyRegionData));
    }
  ),
];
