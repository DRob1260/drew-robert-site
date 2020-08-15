import React from "react";
import { render } from "@testing-library/react";
import { Router } from "./Router";

describe("Router", () => {
  it("renders", () => {
    render(<Router />);
  });
});
