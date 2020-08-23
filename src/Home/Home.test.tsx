import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { Home } from "./Home";

it("should be accessible", async () => {
  const { container } = render(<Home />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
