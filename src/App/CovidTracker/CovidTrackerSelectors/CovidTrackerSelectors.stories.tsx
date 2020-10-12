/* istanbul ignore file */
import React from "react";
import {
  CovidTrackerSelectors,
  LocationSelectorProps,
} from "./CovidTrackerSelectors";
import { Story } from "@storybook/react";
import {
  countryValues,
  regionValues,
  territoryValues,
} from "../../../data/CovidTracker/CovidTrackerSelectors/CovidTrackerSelectors";
import { SelectorValues } from "../../Inputs/Selector/Selector";

export default {
  title: "CovidTrackerSelectors",
  component: CovidTrackerSelectors,
};

const Template: Story<LocationSelectorProps> = (args) => (
  <CovidTrackerSelectors {...args} />
);

const timePeriodValues: SelectorValues = {
  values: [
    {
      name: "All Days",
      key: "all",
      value: 0,
    },
  ],
  current: {
    name: "All Days",
    key: "all",
    value: 0,
  },
  setCurrent: (value) => {},
};

export const LocationSelectorDefault = Template.bind({});
LocationSelectorDefault.args = {
  timePeriodValues: timePeriodValues,
};

export const CovidTrackerSelectorsWithOnlyCountry = Template.bind({});
CovidTrackerSelectorsWithOnlyCountry.args = {
  countryValues: countryValues,
  territoryValues: undefined,
  regionValues: undefined,
};

const countryValuesWithNoCurrent = {
  values: countryValues.values,
  current: undefined,
  setCurrent: () => {},
};
export const CovidTrackerSelectorsWithNoCountrySelected = Template.bind({});
CovidTrackerSelectorsWithNoCountrySelected.args = {
  timePeriodValues: timePeriodValues,
  countryValues: countryValuesWithNoCurrent,
};

export const CovidTrackerSelectorsWithAllValuesSelected = Template.bind({});
CovidTrackerSelectorsWithAllValuesSelected.args = {
  timePeriodValues: timePeriodValues,
  countryValues: countryValues,
  territoryValues: territoryValues,
  regionValues: regionValues,
};
