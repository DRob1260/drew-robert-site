import React from "react";
import { AppBar } from "@material-ui/core";
import "./Footer.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <div className={"Footer"} data-testid={"Footer"}>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export { Footer };
