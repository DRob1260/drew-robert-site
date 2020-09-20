import React from "react";
import { Selector, SelectorProps } from "./Selector";
import { axe } from "jest-axe";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { selectorValues } from "../../../data/Inputs/Selector/SelectorValues";

const selectorProps: SelectorProps = {
  selectorConfiguration: {
    label: "Colors",
    noValue: "None",
  },
  selectorValues: {
    values: [
      {
        name: "Red",
        key: "red",
        value: { color: "red" },
      },
      {
        name: "Blue",
        key: "blue",
        value: { color: "blue" },
      },
      {
        name: "Yellow",
        key: "yellow",
        value: { color: "yellow" },
      },
    ],
    current: undefined,
    setCurrent: (value) => alert(`You selected ${value}`),
  },
};

it("is accessible", async () => {
  const { container } = render(
    <Selector
      selectorConfiguration={{
        label: "Colors",
        noValue: "None",
      }}
      selectorValues={selectorValues}
    />
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("selectorConfiguration", async () => {
  const { queryByText, getByTestId } = render(
    <Selector
      selectorConfiguration={{
        label: "Colors",
        noValue: "None",
      }}
      selectorValues={selectorValues}
    />
  );
  expect(queryByText(selectorProps.selectorConfiguration.label)).not.toBeNull();
  fireEvent.click(getByTestId("Selector-Select"));
  await waitFor(() =>
    expect(
      queryByText(selectorProps.selectorConfiguration.noValue)
    ).not.toBeNull()
  );
});
