import React from "react";
import { LocationSelector, LocationSelectorProps } from "./LocationSelector";
import { Story } from "@storybook/react";
import { SelectedLocations } from "../../../models/CovidTracker/graph/SelectedLocations";

export default {
  title: "LocationSelector",
  component: LocationSelector,
};

const Template: Story<LocationSelectorProps> = (args) => (
  <LocationSelector {...args} />
);

export const LocationSelectorDefault = Template.bind({});
LocationSelectorDefault.args = {
  selectedLocations: {
    country: undefined,
    territory: undefined,
    region: undefined,
  },
  setSelectedLocations: (selectedLocations) => {
    console.log(selectedLocations);
  },
};

export const LocationSelectorWithSelectedLocations = Template.bind({});
LocationSelectorWithSelectedLocations.args = {
  selectedLocations: {
    country: "unitedstates",
    territory: "illinois",
    region: "mclean",
  },
  setSelectedLocations: (selectedLocations) => {
    console.log(selectedLocations);
  },
};
