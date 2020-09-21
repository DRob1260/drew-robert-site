/* istanbul ignore file */
import React from "react";
import { LocationSelector, LocationSelectorProps } from "./LocationSelector";
import { Story } from "@storybook/react";
import {
  countryValues,
  regionValues,
  territoryValues,
} from "../../../data/CovidTracker/LocationSelector/LocationSelector";

export default {
  title: "LocationSelector",
  component: LocationSelector,
};

const Template: Story<LocationSelectorProps> = (args) => (
  <LocationSelector {...args} />
);

export const LocationSelectorDefault = Template.bind({});

export const LocationSelectorWithOnlyCountry = Template.bind({});
LocationSelectorWithOnlyCountry.args = {
  countryValues: countryValues,
  territoryValues: undefined,
  regionValues: undefined,
};

const countryValuesWithNoCurrent = {
  values: countryValues.values,
  current: undefined,
  setCurrent: () => {},
};
export const LocationSelectorWithNoCountrySelected = Template.bind({});
LocationSelectorWithNoCountrySelected.args = {
  countryValues: countryValuesWithNoCurrent,
};

export const LocationSelectorWithAllValuesSelected = Template.bind({});
LocationSelectorWithAllValuesSelected.args = {
  countryValues: countryValues,
  territoryValues: territoryValues,
  regionValues: regionValues,
};
