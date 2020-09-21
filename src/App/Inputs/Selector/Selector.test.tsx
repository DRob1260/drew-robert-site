import React from "react";
import { Selector, SelectorProps, SelectorValues } from "./Selector";
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
  // test label
  expect(queryByText(selectorProps.selectorConfiguration.label)).not.toBeNull();
  // test noValue
  fireEvent.change(getByTestId("Selector-Select"), {
    target: { value: "yellow" },
  });
  await waitFor(() => expect(queryByText("Yellow")).not.toBeNull());
  fireEvent.change(getByTestId("Selector-Select"), {
    target: { value: "" },
  });
  await waitFor(() => expect(queryByText("Yellow")).toBeNull());
});

test("selectorValues", async () => {
  const setCurrent = jest.fn();
  const selectorValues: SelectorValues = {
    values: [
      {
        name: "Thing 1",
        key: "thing1",
        value: { my: "value1" },
      },
      {
        name: "Thing 2",
        key: "thing2",
        value: { my: "value2" },
      },
    ],
    current: {
      name: "Thing 1",
      key: "thing1",
      value: { my: "value1" },
    },
    setCurrent: setCurrent,
  };
  const { queryByText, getByTestId } = render(
    <Selector
      selectorValues={selectorValues}
      selectorConfiguration={{
        label: "Things",
      }}
    />
  );
  expect(queryByText("Thing 1")).not.toBeNull();
  fireEvent.change(getByTestId("Selector-Select"), {
    target: { value: "thing2" },
  });
  await waitFor(() => {
    expect(queryByText("Thing 1")).toBeNull();
    expect(queryByText("Thing 2")).not.toBeNull();
  });
  expect(setCurrent).toBeCalledWith({
    name: "Thing 2",
    key: "thing2",
    value: { my: "value2" },
  });
});
