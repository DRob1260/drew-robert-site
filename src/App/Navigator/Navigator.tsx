import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import navIcon from "./drew-icon.png";
import "./Navigator.scss";

const Navigator: React.FunctionComponent = () => {
  return (
    <div className={"Navigator"}>
      <a href={"/"}>
        <img id={"nav-icon"} src={navIcon} alt={"Drew Icon"} />
      </a>
      <Toolbar id={"toolbar"}>
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
