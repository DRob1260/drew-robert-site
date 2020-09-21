import React from "react";
import { Selector, SelectorProps } from "./Selector";
import { Story } from "@storybook/react";
import { selectorValues } from "../../../data/Inputs/Selector/SelectorValues";

export default {
  title: "Selector",
  component: Selector,
};

const Template: Story<SelectorProps> = (args) => <Selector {...args} />;

export const SelectorWithNoValueOption = Template.bind({});
SelectorWithNoValueOption.args = {
  selectorConfiguration: {
    label: "Colors",
    noValue: "None",
  },
  selectorValues: selectorValues,
};

export const SelectorWithoutValueSelected = Template.bind({});
SelectorWithoutValueSelected.args = {
  selectorConfiguration: {
    label: "Colors",
  },
  selectorValues: selectorValues,
};

const selectorValuesWithValueSelected = selectorValues;
selectorValuesWithValueSelected.current =
  selectorValuesWithValueSelected.values[0];
export const SelectorWithValueSelected = Template.bind({});
SelectorWithValueSelected.args = {
  selectorConfiguration: {
    label: "Colors",
  },
  selectorValues: selectorValuesWithValueSelected,
};
