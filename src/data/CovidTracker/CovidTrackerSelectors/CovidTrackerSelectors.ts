/* istanbul ignore file */
import { SelectorValues } from "../../../App/Inputs/Selector/Selector";

export const timePeriodValues: SelectorValues = {
  values: [
    { name: "Past 30 Days", key: "30", value: 30 },
    { name: "Past 60 Days", key: "60", value: 60 },
    { name: "Past 90 Days", key: "90", value: 90 },
    { name: "Past 120 Days", key: "120", value: 120 },
    { name: "Past 150 Days", key: "150", value: 150 },
    { name: "Past 180 Days", key: "180", value: 180 },
  ],
  current: { name: "Past 30 Days", key: "30", value: 30 },
  setCurrent: (value) => {},
};

export const countryValues: SelectorValues = {
  values: [
    {
      name: "United States of America",
      key: "unitedstates",
      value: {
        name: "United States of America",
        key: "unitedstates",
        source: { name: "", apiUrl: "", infoUrl: "" },
      },
    },
  ],
  current: {
    name: "United States of America",
    key: "unitedstates",
    value: {
      name: "United States of America",
      key: "unitedstates",
      source: { name: "", apiUrl: "", infoUrl: "" },
    },
  },
  setCurrent: (value) => {},
};

export const territoryValues: SelectorValues = {
  values: [
    {
      name: "Illinois",
      key: "illinois",
      value: {
        name: "Illinois",
        key: "illinois",
        source: {
          name: "Illinois Department of Public Health",
          apiUrl:
            "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
          infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
        },
      },
    },
  ],
  current: {
    name: "Illinois",
    key: "illinois",
    value: {
      name: "Illinois",
      key: "illinois",
      source: {
        name: "Illinois Department of Public Health",
        apiUrl:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
      },
    },
  },
  setCurrent: (value) => {},
};

export const regionValues: SelectorValues = {
  values: [
    {
      name: "McLean",
      key: "mclean",
      value: {
        name: "Illinois Department of Public Health",
        apiUrl:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
      },
    },
  ],
  current: {
    name: "McLean",
    key: "mclean",
    value: {
      name: "Illinois Department of Public Health",
      apiUrl:
        "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
      infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
    },
  },
  setCurrent: (value) => {},
};
