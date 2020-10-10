import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import "./Footer.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={"Footer"}>
      <AppBar position={"static"}>
        <Toolbar>
          <p>hello</p>
        </Toolbar>
      </AppBar>
    </div>
  );
};
