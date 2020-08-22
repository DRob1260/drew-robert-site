import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import navIcon from "./drew-icon.png";
import "./Navigator.scss";

const Navigator: React.FunctionComponent = () => {
  return (
    <div className={"Navigator"}>
      <img id={"nav-icon"} src={navIcon} alt={"Drew Icon"} />
      <Toolbar id={"toolbar"}>
        <Button
          variant={"contained"}
          className={"button left-button"}
          href={"/"}
        >
          Landing Page
        </Button>
        <Button
          variant={"contained"}
          className={"button right-button"}
          href={"/home"}
        >
          Home
        </Button>
      </Toolbar>
    </div>
  );
};

export { Navigator };
