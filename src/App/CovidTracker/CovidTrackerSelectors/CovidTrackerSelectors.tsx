import React from "react";
import { Grid } from "@material-ui/core";
import { Selector, SelectorValues } from "../../Inputs/Selector/Selector";

export interface LocationSelectorProps {
  timePeriodValues: SelectorValues;
  countryValues: SelectorValues | undefined;
  territoryValues: SelectorValues | undefined;
  regionValues: SelectorValues | undefined;
}

export const CovidTrackerSelectors: React.FunctionComponent<LocationSelectorProps> = ({
  timePeriodValues,
  countryValues,
  territoryValues,
  regionValues,
}) => {
  return (
    <div className={"CovidTrackerSelectors"}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Selector
            selectorValues={timePeriodValues}
            selectorConfiguration={{
              label: "Time Period",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {countryValues && (
            <Selector
              data-testid={"CovidTrackerSelectors-Country"}
              selectorValues={countryValues}
              selectorConfiguration={{
                label: "Country",
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {territoryValues && (
            <Selector
              data-testid={"CovidTrackerSelectors-Territory"}
              selectorValues={territoryValues}
              selectorConfiguration={{
                label: "Territory",
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {regionValues && (
            <Selector
              data-testid={"CovidTrackerSelectors-Region"}
              selectorValues={regionValues}
              selectorConfiguration={{
                label: "Region",
                noValue: "None",
              }}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
