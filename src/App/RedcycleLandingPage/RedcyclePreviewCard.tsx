import React from "react";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import RedcycleDemoGif from "./redcycle-demo.gif";
import "./RedcyclePreviewCard.scss";

export const RedcyclePreviewCard: React.FunctionComponent = () => {
  return (
    <div className={"RedcyclePreviewCard"}>
      <PreviewCard
        title={"Redcycle"}
        description={
          "Redcycle is a project created by myself and 4 other classmates while completing Principles of Software Engineering (IT 326) at Illinois State University. It aims to be a community tool for giving away items you no longer need."
        }
        path={"/redcycle-landing-page"}
      >
        <img src={RedcycleDemoGif} alt={"demo of Redcycle application"} />
      </PreviewCard>
    </div>
  );
};
