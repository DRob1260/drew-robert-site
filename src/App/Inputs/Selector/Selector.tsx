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
  const [currentValueKey, setCurrentValueKey] = useState<string | undefined>(
    selectorValues.current?.key
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

  return (
    <div
      data-testid={`Selector-${selectorConfiguration.label}`}
      className={`Selector Selector-${selectorConfiguration.label}`}
    >
      <FormControl>
        <InputLabel id={`Selector-${selectorConfiguration.label}-label`}>
          {selectorConfiguration.label}
        </InputLabel>
        <Select
          labelId={`Selector-${selectorConfiguration.label}-label`}
          value={currentValueKey}
          onChange={handleChange}
        >
          {selectorConfiguration.noValue && (
            <MenuItem key={undefined} value={undefined}>
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
