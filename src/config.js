/* istanbul ignore file */

const DOCKER = process.env.DOCKER;

export const Urls = {
  covidApi: DOCKER ? "/covid-api" : "http://localhost:8080/covid-api",
};
