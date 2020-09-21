import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { CovidTrackerLineGraph } from "./CovidTrackerLineGraph";
import { graphLineWithPropertiesList } from "../../../data/CovidTracker/CovidTrackerLineGraph/CovidTrackerLineGraph";

it("is accessible", async () => {
  const { container } = render(
    <CovidTrackerLineGraph
      location={"Illinois"}
      graphLineWithPropertiesList={graphLineWithPropertiesList}
    />
  );

  expect(await axe(container)).toHaveNoViolations();
});
