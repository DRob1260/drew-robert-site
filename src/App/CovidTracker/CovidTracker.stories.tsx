import React from "react";
import { CovidTracker, CovidTrackerProps } from "./CovidTracker";
import { Story } from "@storybook/react";

export default {
  title: "CovidTracker",
  component: CovidTracker,
};

const Template: Story<CovidTrackerProps> = (args) => <CovidTracker {...args} />;

export const CovidTrackerUnitedStates = Template.bind({});
CovidTrackerUnitedStates.args = {
  country: "unitedstates",
};

export const CovidTrackerIllinois = Template.bind({});
CovidTrackerIllinois.args = {
  country: "unitedstates",
  territory: "illinois",
};

export const CovidTrackerMclean = Template.bind({});
CovidTrackerMclean.args = {
  country: "unitedstates",
  territory: "illinois",
  region: "mclean",
};
