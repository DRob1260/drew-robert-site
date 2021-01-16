import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import {
  featuredDependencies,
  getDependencies,
  getDevDependencies,
} from "./DependencyCreditsUtilities";
import { OpenInNew } from "@material-ui/icons";
import "./DependencyCredits.scss";

export const DependencyCredits: React.FunctionComponent = () => {
  return (
    <div className={"DependencyCredits"}>
      <Grid container spacing={1} id={"primary-grid-container"}>
        <Grid item sm={12} md={6} lg={8}>
          <Grid
            container
            spacing={1}
            alignItems={"stretch"}
            id={"featured-dependencies"}
          >
            <Grid item xs={12}>
              <Typography
                variant={"h4"}
                component={"div"}
                className={"heading"}
              >
                Featured Dependencies
              </Typography>
            </Grid>
            {featuredDependencies.map((featuredDependency) => {
              return (
                <Grid item xs={12} md={12} lg={3} key={featuredDependency.name}>
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
                      >
                        <OpenInNew />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4} id={"all-dependencies"}>
          <Typography variant={"h4"} component={"div"} className={"heading"}>
            All Dependencies
          </Typography>
          <div id={"all-dependencies-list"}>
            <List subheader={<li />}>
              <li>
                <ul>
                  <ListSubheader>Production Dependencies</ListSubheader>
                  {getDependencies().map((dependency) => {
                    return (
                      <ListItem key={dependency.name}>
                        <ListItemText primary={dependency.name} />
                      </ListItem>
                    );
                  })}
                </ul>
              </li>
              <li>
                <ul>
                  <ListSubheader>Developer Dependencies</ListSubheader>
                  {getDevDependencies().map((dependency) => {
                    return (
                      <ListItem key={dependency.name}>
                        <ListItemText primary={dependency.name} />
                      </ListItem>
                    );
                  })}
                </ul>
              </li>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
