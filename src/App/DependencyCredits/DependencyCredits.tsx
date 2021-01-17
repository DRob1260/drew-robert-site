import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import "./DependencyCredits.scss";
import { FeaturedDependencies } from "./FeaturedDependencies/FeaturedDependencies";
import { AllDependencies } from "./AllDependencies/AllDependencies";
import { Code } from "@material-ui/icons";

export const DependencyCredits: React.FunctionComponent = () => {
  return (
    <div className={"DependencyCredits"}>
      <Grid
        container
        spacing={2}
        alignItems={"stretch"}
        id={"primary-grid-container"}
      >
        <Grid item xs={12} id={"introduction"}>
          <Typography variant={"h4"} component={"h1"} id={"heading"}>
            <Code fontSize={"inherit"} />
            Website Dependencies
          </Typography>
          <Typography variant={"body1"} id={"body"}>
            This website relies on dozens of open-source projects for both
            delivering production code and for assisting development. Listed
            here are all of the direct dependencies of the site and featured are
            some of my favorites.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6} lg={9}>
          <FeaturedDependencies />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <AllDependencies />
        </Grid>
      </Grid>
    </div>
  );
};
