/* istanbul ignore file */
const environment = process.env.NODE_ENV;

export const Urls = {
  drewRobertApi:
    environment === "production" ? "/api" : "https://drewrobert.com/api",
};
