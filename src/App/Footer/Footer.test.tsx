import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { Footer } from "./Footer";

it("should be accessible", async () => {
  const { container } = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("plugs gulden tech", () => {
  const { queryByTestId } = render(<Footer />);
  expect(queryByTestId("guldentech")).not.toBeNull();
});
