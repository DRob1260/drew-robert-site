import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import { RedcyclePreviewCard } from "../../RedcycleLandingPage/RedcyclePreviewCard";
import "./Projects.scss";
import { CovidTrackerPreviewCard } from "../../CovidTracker/CovidTrackerPreviewCard";
import { MmePreviewCard } from "../../MME/MmePreviewCard";

const ProjectPreviewCards = [
  <CovidTrackerPreviewCard key={"project-preview-card-0"} />,
  <MmePreviewCard key={"project-preview-card-1"} />,
  <RedcyclePreviewCard key={"project-preview-card-2"} />,
];

export const Projects: React.FunctionComponent = () => {
  const mobileSize = window.innerWidth < 500;

  return (
    <div className={"Projects"} data-testid={"Projects"}>
      <GridList cellHeight={"auto"} cols={mobileSize ? 1 : 2.5} spacing={10}>
        <GridListTile
          cols={mobileSize ? 1 : 2}
          style={{ height: "auto" }}
          id={"header-tile"}
        >
          <Typography variant={"h4"} component={"h1"}>
            Projects
          </Typography>
        </GridListTile>
        {ProjectPreviewCards.map((previewCard, index) => {
          return (
            <GridListTile
              key={`project-grid-tile-${index}`}
              data-testid={"grid-list-tile"}
            >
              {previewCard}
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};
