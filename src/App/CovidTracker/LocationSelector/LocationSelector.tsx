import React from "react";
import "./LocationSelector.scss";
import { Selector, SelectorValues } from "../../Inputs/Selector/Selector";

export interface LocationSelectorProps {
  countryValues: SelectorValues;
  territoryValues: SelectorValues;
  regionValues: SelectorValues;
}

export const LocationSelector: React.FunctionComponent<LocationSelectorProps> = ({
  countryValues,
  territoryValues,
  regionValues,
}) => {
  return (
    <div className={"LocationSelector"}>
      <Selector
        selectorValues={countryValues}
        selectorConfiguration={{
          label: "Country",
        }}
      />
      <Selector
        selectorValues={territoryValues}
        selectorConfiguration={{
          label: "Territory",
        }}
      />
      <Selector
        selectorValues={regionValues}
        selectorConfiguration={{
          label: "Region",
        }}
      />
    </div>
  );
};
