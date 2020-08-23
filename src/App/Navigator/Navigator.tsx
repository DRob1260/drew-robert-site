import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import navIcon from "./drew-icon.png";
import "./Navigator.scss";

const Navigator: React.FunctionComponent = () => {
  return (
    <div className={"Navigator"}>
      <header>
        <nav>
          <a href={"/"} id={"nav-icon-link"}>
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
        </nav>
      </header>
    </div>
  );
};

export { Navigator };
