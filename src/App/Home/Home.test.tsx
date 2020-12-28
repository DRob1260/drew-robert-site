import React from "react";
import { axe } from "jest-axe";
import { render, waitFor } from "@testing-library/react";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  const { container, queryByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("displays Projects", async () => {
  const { queryByTestId, queryByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  // wait for CovidTrackerPreviewCard to finish loading
  await waitFor(() => expect(queryByText("Illinois Cases")).not.toBeNull());
  expect(queryByTestId("Projects")).not.toBeNull();
});
