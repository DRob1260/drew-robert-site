import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./RedcycleLandingPage.scss";

export const RedcycleLandingPage: React.FunctionComponent = () => {
  return (
    <div className={"RedcycleLandingPage"} data-testid={"RedcycleLandingPage"}>
      <main>
        <div id={"intro"}>
          <h1>Redcycle</h1>
          <p>
            Created by Braden Thomas, Christina Overton, Drew Robert, Hunter
            Berry, & Joey Schmidt.
          </p>
        </div>
        <div id={"description"}>
          <p>
            Redcycle is a project submitted in partial fulfillment of IT 326
            Software Engineering at Illinois State University. It aims to design
            and build a web application that allows people in and around the
            Illinois State University community to offer items they no longer
            need to others in the community.
          </p>
        </div>
        <div id={"buttons"}>
          <ButtonGroup variant={"text"} orientation={"vertical"}>
            <Button size={"large"} href={"/redcycle"} target={"_blank"}>
              Redcycle Application
            </Button>
            <Button
              size={"large"}
              href={
                "https://drive.google.com/file/d/1dPjQ7lP0AfcGlHQiIKOlY5A3ztEg55Bt/view?usp=sharing"
              }
              target={"_blank"}
            >
              SRS Document
            </Button>

            <Button
              size={"large"}
              href={"https://github.com/DRob1260/drew-robert-site"}
              target={"_blank"}
            >
              GitHub Repo
            </Button>
          </ButtonGroup>
        </div>
      </main>
    </div>
  );
};
