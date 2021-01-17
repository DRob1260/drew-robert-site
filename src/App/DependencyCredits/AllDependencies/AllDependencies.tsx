import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import {
  getDependencies,
  getDevDependencies,
} from "../DependencyCreditsUtilities";
import { OpenInNew, List as ListIcon } from "@material-ui/icons";
import "./AllDependencies.scss";

export const AllDependencies: React.FunctionComponent = () => {
  return (
    <div className={"AllDependencies"}>
      <Typography variant={"h5"} component={"h2"} className={"heading"}>
        <ListIcon fontSize={"inherit"} />
        All
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
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => window.open(dependency.url)}>
                        <OpenInNew />
                      </IconButton>
                    </ListItemSecondaryAction>
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
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => window.open(dependency.url)}>
                        <OpenInNew />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </ul>
          </li>
        </List>
      </div>
    </div>
  );
};
