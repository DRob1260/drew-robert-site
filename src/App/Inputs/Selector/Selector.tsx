import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import "./Selector.scss";

export interface Value {
  name: string;
  key: string;
  value: any;
}

export interface SelectorValues {
  values: Value[];
  current: Value | undefined;
  setCurrent: (value: Value | undefined) => void;
}

export interface SelectorConfiguration {
  label: string;
  noValue?: string;
}

export interface SelectorProps {
  selectorValues: SelectorValues;
  selectorConfiguration: SelectorConfiguration;
}

export const Selector: React.FunctionComponent<SelectorProps> = ({
  selectorConfiguration,
  selectorValues,
}) => {
  const [currentValueKey, setCurrentValueKey] = useState<string>(
    selectorValues.current?.key || ""
  );

  useEffect(() => {
    const currentValue = selectorValues.values.find(
      (v) => v.key === currentValueKey
    );
    selectorValues.setCurrent(currentValue);
  }, [currentValueKey, selectorValues]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentValueKey(event.target.value as string);
  };

  const labelWithoutSpaces = selectorConfiguration.label.replace(/\s/g, "");

  return (
    <div
      data-testid={`Selector-${labelWithoutSpaces}`}
      className={`Selector Selector-${labelWithoutSpaces}`}
    >
      <FormControl>
        <InputLabel id={`Selector-${labelWithoutSpaces}-label`}>
          {selectorConfiguration.label}
        </InputLabel>
        <Select
          labelId={`Selector-${labelWithoutSpaces}-label`}
          value={currentValueKey}
          onChange={handleChange}
          autoWidth={true}
          inputProps={{
            "data-testid": "Selector-Select",
          }}
        >
          {selectorConfiguration.noValue && (
            <MenuItem
              key={undefined}
              value={""}
              data-testid={"Selector-noValue"}
            >
              {selectorConfiguration.noValue}
            </MenuItem>
          )}
          {selectorValues.values.map((value, index) => {
            return (
              <MenuItem key={index} value={value.key}>
                {value.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
