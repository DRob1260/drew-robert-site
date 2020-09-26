/* istanbul ignore file */
const docker = process.env.DOCKER;

export const Urls = {
  covidApi: docker ? "/covid-api" : "http://localhost:8080/covid-api",
};
