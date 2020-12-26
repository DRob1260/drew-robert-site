import React from "react";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import RedcycleDemoGif from "./redcycle-demo.gif";
import "./RedcycleLandingPagePreviewCard.scss";

export const RedcycleLandingPagePreviewCard: React.FunctionComponent = () => {
  return (
    <div className={"RedcycleLandingPagePreviewCard"}>
      <PreviewCard
        title={"Redcycle"}
        description={
          "Redcycle is a project created by classmates and I while completing Principles of Software Engineering (IT 326) at Illinois State University. It aims to be a community tool for giving away items you no longer need."
        }
        path={"/redcycle-landing-page"}
      >
        <img src={RedcycleDemoGif} alt={"demo of Redcycle application"} />
      </PreviewCard>
    </div>
  );
};
