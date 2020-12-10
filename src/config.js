/* istanbul ignore file */

const local = process.env.REACT_APP_LOCAL;

export const Urls = {
  covidApi: local ? "http://localhost:2601/api/covid" : "/api/covid",
  redcycleUi: local ? "http://localhost:2601/redcycle" : "/redcycle",
  redcycleAdmin: local
    ? "http://localhost:8000/redcycle/admin/"
    : "/redcycle/admin/",
};
