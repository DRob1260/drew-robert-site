/* istanbul ignore file */
import React from "react";
import {
  CovidTrackerLineGraph,
  CovidTrackerLineGraphProps,
} from "./CovidTrackerLineGraph";
import { Story } from "@storybook/react";
import {
  buildTotalCasesGraphLineWithProperties,
  buildTotalDeathsGraphLineWithProperties,
  buildTotalTestsGraphLineWithProperties,
} from "../CovidTrackerUtils";
import { illinoisHistoricalRecords } from "../../../data/CovidTracker/illinois";

export default {
  title: "CovidTrackerLineGraph",
  component: CovidTrackerLineGraph,
};

const Template: Story<CovidTrackerLineGraphProps> = (args) => (
  <CovidTrackerLineGraph {...args} />
);

export const CovidTrackerLineGraphDefault = Template.bind({});
CovidTrackerLineGraphDefault.args = {
  location: "",
  graphLineWithPropertiesList: [],
};

export const CovidTrackerLineGraphWithAllData = Template.bind({});
CovidTrackerLineGraphWithAllData.args = {
  location: "Illinois",
  graphLineWithPropertiesList: [
    buildTotalTestsGraphLineWithProperties(illinoisHistoricalRecords, true),
    buildTotalCasesGraphLineWithProperties(illinoisHistoricalRecords, true),
    buildTotalDeathsGraphLineWithProperties(illinoisHistoricalRecords, true),
  ],
};
