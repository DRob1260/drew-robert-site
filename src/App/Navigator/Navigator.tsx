import React, { useState } from "react";
import { Toolbar, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import navIcon from "./drew-icon.png";
import "./Navigator.scss";

const Navigator: React.FunctionComponent = () => {
  const [
    projectsMenuAnchor,
    setProjectsMenuAnchor,
  ] = useState<HTMLElement | null>(null);

  const closeProjectsMenu = () => {
    setProjectsMenuAnchor(null);
  };

  return (
    <div className={"Navigator"} data-testid={"Navigator"}>
      <header>
        <nav>
          <Link to={"/"} className={"Link"} id={"nav-icon-link"}>
            <img
              id={"nav-icon"}
              src={navIcon}
              alt={"Drew Icon"}
              data-testid={"Navigator-icon"}
            />
          </Link>
          <Toolbar id={"toolbar"}>
            <Link to={"/"} className={"Link"}>
              <Button
                variant={"contained"}
                className={"button left-button"}
                data-testid={"Navigator-home"}
              >
                Home
              </Button>
            </Link>
            <Button
              variant={"contained"}
              className={"button right-button"}
              data-testid={"Navigator-projects"}
              onClick={(event) => setProjectsMenuAnchor(event.currentTarget)}
            >
              Projects
            </Button>
            <Menu
              id={"projects-menu"}
              open={Boolean(projectsMenuAnchor)}
              anchorEl={projectsMenuAnchor}
              keepMounted={true}
              onClose={() => closeProjectsMenu()}
            >
              <MenuItem onClick={closeProjectsMenu} className={"Link"}>
                <Link to={"/covid/usa/il/illinois"} className={"Link"}>
                  COVID-19 Metrics Tracker
                </Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </nav>
      </header>
    </div>
  );
};

export { Navigator };
