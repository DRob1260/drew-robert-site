/* istanbul ignore file */

const local = process.env.REACT_APP_LOCAL;

export const Urls = {
  covidApi: local ? "http://localhost:8080/api/covid" : "/api/covid",
  galleryApi: local ? "http://localhost:8080/api/gallery" : "/api/gallery",
  mmeApi: local ? "http://localhost:8080/api/mme" : "/api/mme",
  redcycleUi: local ? "http://localhost:2601/redcycle" : "/redcycle",
  redcycleAdmin: local
    ? "http://localhost:8000/redcycle/admin/"
    : "/redcycle/admin/",
  redcycleApi: local ? "http://localhost:2601/redcycle/api" : "/redcycle/api",
};
