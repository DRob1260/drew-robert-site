import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { RedcyclePreviewCard } from "./RedcyclePreviewCard";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  const { container } = render(
    <BrowserRouter>
      <RedcyclePreviewCard />
    </BrowserRouter>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("displays the desired information", () => {
  const { queryByText, queryByTestId, queryByAltText } = render(
    <BrowserRouter>
      <RedcyclePreviewCard />
    </BrowserRouter>
  );
  expect(queryByText("Redcycle")).not.toBeNull();
  expect(queryByAltText("demo of Redcycle application")).not.toBeNull();
  expect(queryByTestId("visit-project-button")).not.toBeNull();
});
