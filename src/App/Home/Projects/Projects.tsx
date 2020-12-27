import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import { RedcyclePreviewCard } from "../../RedcycleLandingPage/RedcyclePreviewCard";
import "./Projects.scss";
import { CovidTrackerPreviewCard } from "../../CovidTracker/CovidTrackerPreviewCard";

const ProjectPreviewCards = [
  <CovidTrackerPreviewCard key={"project-preview-card-0"} />,
  <RedcyclePreviewCard key={"project-preview-card-1"} />,
];

export const Projects: React.FunctionComponent = () => {
  return (
    <div className={"Projects"}>
      <GridList
        cellHeight={"auto"}
        cols={window.innerWidth > 500 ? 2.5 : 1}
        spacing={10}
      >
        <GridListTile cols={2} style={{ height: "auto" }} id={"header-tile"}>
          <Typography variant={"h4"} component={"h1"}>
            Projects
          </Typography>
        </GridListTile>
        {ProjectPreviewCards.map((previewCard, index) => {
          return (
            <GridListTile key={`project-grid-tile-${index}`}>
              {previewCard}
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};
