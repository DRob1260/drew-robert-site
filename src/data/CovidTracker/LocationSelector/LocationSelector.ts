import { SelectorValues } from "../../../App/Inputs/Selector/Selector";

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
