import React from "react";
import { axe } from "jest-axe";
import { render, waitFor } from "@testing-library/react";
import { CovidTrackerPreviewCard } from "./CovidTrackerPreviewCard";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  const { container, queryByText } = render(
    <BrowserRouter>
      <CovidTrackerPreviewCard />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(await axe(container)).toHaveNoViolations();
});

it("displays the desired information", async () => {
  const { queryByText, queryByTestId } = render(
    <BrowserRouter>
      <CovidTrackerPreviewCard />
    </BrowserRouter>
  );
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(queryByText("COVID-19 Metrics Tracker")).not.toBeNull();
  expect(queryByTestId("visit-project-button")).not.toBeNull();
});
