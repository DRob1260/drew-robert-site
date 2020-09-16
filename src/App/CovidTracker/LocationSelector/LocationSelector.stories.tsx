import React from "react";
import { LocationSelector, LocationSelectorProps } from "./LocationSelector";
import { Story } from "@storybook/react";
import { SelectedLocations } from "../../../models/CovidTracker/graph/SelectedLocations";
import { Value } from "../../Inputs/Selector/Selector";

export default {
  title: "LocationSelector",
  component: LocationSelector,
};

const Template: Story<LocationSelectorProps> = (args) => (
  <LocationSelector {...args} />
);

export const LocationSelectorWithValues = Template.bind({});
LocationSelectorWithValues.args = {
  countryValues: {
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
    setCurrent: (value) => alert(value),
  },
  territoryValues: {
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
    setCurrent: (value) => alert(value),
  },
  regionValues: {
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
    setCurrent: (value) => alert(value),
  },
};
