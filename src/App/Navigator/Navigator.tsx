import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import navIcon from "./drew-icon.png";
import "./Navigator.scss";

const Navigator: React.FunctionComponent = () => {
  return (
    <div className={"Navigator"} data-testid={"Navigator"}>
      <header>
        <nav>
          <Link to={"/"} id={"nav-icon-link"} data-testid={"Navigator-icon"}>
            <img id={"nav-icon"} src={navIcon} alt={"Drew Icon"} />
          </Link>
          <Toolbar id={"toolbar"}>
            <Link to={"/home"}>
              <Button
                variant={"contained"}
                className={"button right-button"}
                data-testid={"Navigator-home"}
              >
                Home
              </Button>
            </Link>
          </Toolbar>
        </nav>
      </header>
    </div>
  );
};

export { Navigator };
