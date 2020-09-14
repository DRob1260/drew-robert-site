import React from "react";
import { CovidTracker } from "./CovidTracker";

export default {
  title: "CovidTracker",
  component: CovidTracker,
};

export const CovidTrackerDefault = (
  <CovidTracker country={"unitedstates"} state={"illinois"} region={"mclean"} />
);
