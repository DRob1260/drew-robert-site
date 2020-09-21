/* istanbul ignore file */
import { SelectorValues } from "../../../App/Inputs/Selector/Selector";

export const selectorValues: SelectorValues = {
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
  setCurrent: (value) => {},
};
