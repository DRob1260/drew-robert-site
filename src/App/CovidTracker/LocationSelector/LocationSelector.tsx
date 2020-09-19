import React from "react";
import "./LocationSelector.scss";
import { Selector, SelectorValues } from "../../Inputs/Selector/Selector";

export interface LocationSelectorProps {
  countryValues: SelectorValues | undefined;
  territoryValues: SelectorValues | undefined;
  regionValues: SelectorValues | undefined;
}

export const LocationSelector: React.FunctionComponent<LocationSelectorProps> = ({
  countryValues,
  territoryValues,
  regionValues,
}) => {
  return (
    <div className={"LocationSelector"}>
      {countryValues && (
        <Selector
          selectorValues={countryValues}
          selectorConfiguration={{
            label: "Country",
          }}
        />
      )}
      {territoryValues && (
        <Selector
          selectorValues={territoryValues}
          selectorConfiguration={{
            label: "Territory",
          }}
        />
      )}
      {regionValues && (
        <Selector
          selectorValues={regionValues}
          selectorConfiguration={{
            label: "Region",
            noValue: "None",
          }}
        />
      )}
    </div>
  );
};
