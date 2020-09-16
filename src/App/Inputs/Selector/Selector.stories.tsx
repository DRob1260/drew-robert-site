import React from "react";
import { Selector, SelectorProps } from "./Selector";
import { Story } from "@storybook/react";

export default {
  title: "Selector",
  component: Selector,
};

const Template: Story<SelectorProps> = (args) => <Selector {...args} />;

export const SelectorWithValues = Template.bind({});
SelectorWithValues.args = {
  selectorConfiguration: {
    label: "Colors",
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
    current: {
      name: "Red",
      key: "red",
      value: { color: "red" },
    },
    setCurrent: (value) => alert(`You selected ${value}`),
  },
};
