import React from "react";
import { featuredDependencies } from "../DependencyCreditsUtilities";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { OpenInNew } from "@material-ui/icons";
import "./FeaturedDependencies.scss";

export const FeaturedDependencies: React.FunctionComponent = () => {
  return (
    <div
      className={"FeaturedDependencies"}
      data-testid={"FeaturedDependencies"}
    >
      <Typography variant={"h5"} component={"h2"} className={"heading"}>
        <Star fontSize={"inherit"} />
        Featured
      </Typography>
      <Grid container spacing={1} alignItems={"stretch"}>
        {featuredDependencies.map((featuredDependency) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              lg={4}
              key={featuredDependency.name}
            >
              <Card>
                <CardHeader title={featuredDependency.name} />
                <CardContent>
                  <Typography variant={"body1"}>
                    {featuredDependency.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() => window.open(featuredDependency.url)}
                    aria-label={`Open ${featuredDependency.url}`}
                    data-testid={`link-to-${featuredDependency.name}`}
                  >
                    <OpenInNew />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
