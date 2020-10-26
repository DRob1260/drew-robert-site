import React from "react";
import { Story } from "@storybook/react";
import { CovidTrackerTable, CovidTrackerTableProps } from "./CovidTrackerTable";
import { illinoisHistoricalRecords } from "../../../mocks/covid/HistoricalRecords";
import { buildCovidTrackerTableRows } from "./CovidTrackerTableUtilities";

export default {
  title: "CovidTrackerTable",
  component: CovidTrackerTable,
};

const Template: Story<CovidTrackerTableProps> = (args) => (
  <CovidTrackerTable {...args} />
);

export const CovidTrackerWithData = Template.bind({});
CovidTrackerWithData.args = {
  tableRows: buildCovidTrackerTableRows(illinoisHistoricalRecords),
};
