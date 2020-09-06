/* istanbul ignore file */
const environment = process.env.ENVIRONMENT;

export const Urls = {
  drewRobertApi:
    environment === "prod"
      ? "https://shielded-spire-10992.herokuapp.com"
      : "http://localhost:8080",
};
