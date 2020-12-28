import React from "react";
import { axe } from "jest-axe";
import { render, waitFor } from "@testing-library/react";
import { CovidTrackerPreviewCard } from "./CovidTrackerPreviewCard";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Urls } from "../../config";

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

it("displays a placeholder image if an error occurs while retrieving data", async () => {
  const server = setupServer(
    rest.get(`${Urls.covidApi}/*`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  server.listen();

  const { queryByAltText } = render(
    <BrowserRouter>
      <CovidTrackerPreviewCard />
    </BrowserRouter>
  );
  await waitFor(() =>
    expect(queryByAltText("COVID-19 total cases graph")).not.toBeNull()
  );

  server.close();
});
