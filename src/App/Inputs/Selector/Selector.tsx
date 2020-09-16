import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import "./Selector.scss";

export interface Value {
  name: string;
  key: string;
  value: any;
}

export interface SelectorValues {
  values: Value[];
  current: Value;
  setCurrent: (value: Value) => void;
}

export interface SelectorConfiguration {
  label: string;
}

export interface SelectorProps {
  selectorValues: SelectorValues;
  selectorConfiguration: SelectorConfiguration;
}

export const Selector: React.FunctionComponent<SelectorProps> = ({
  selectorConfiguration,
  selectorValues,
}) => {
  return (
    <div
      data-testid={`Selector-${selectorConfiguration.label}`}
      className={`Selector Selector-${selectorConfiguration.label}`}
    >
      <FormControl>
        <InputLabel id={`Selector-${selectorConfiguration.label}-label`}>
          {selectorConfiguration.label}
        </InputLabel>
        <Select labelId={`Selector-${selectorConfiguration.label}-label`}>
          {selectorValues.values.map((value, index) => {
            return (
              <MenuItem
                key={index}
                value={value.key}
                onSelect={() => selectorValues.setCurrent(value)}
              >
                {value.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
