import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { RedcycleLandingPagePreviewCard } from "../../RedcycleLandingPage/RedcycleLandingPagePreviewCard";
import "./Projects.scss";

const ProjectPreviewCards = [
  <RedcycleLandingPagePreviewCard key={"project-preview-card-0"} />,
];

export const Projects: React.FunctionComponent = () => {
  return (
    <div className={"Projects"}>
      {console.log(window.innerWidth)}
      <GridList cellHeight={"auto"} cols={window.innerWidth > 500 ? 2.5 : 1}>
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
