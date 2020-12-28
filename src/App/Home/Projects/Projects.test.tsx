import React from "react";
import { axe } from "jest-axe";
import { render, waitFor } from "@testing-library/react";
import { Projects } from "./Projects";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  const { container, queryByText } = render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(await axe(container)).toHaveNoViolations();
});

it("renders for a mobile screen size", async () => {
  global.innerWidth = 450;
  const { queryByText } = render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(queryByText("Projects")).not.toBeNull();
});

it("displays a header", async () => {
  const { queryByText } = render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(queryByText("Projects")).not.toBeNull();
});

it("renders the project previews", async () => {
  const { queryByText, queryAllByTestId } = render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(queryAllByTestId("grid-list-tile").length).toBeGreaterThan(1);
});
