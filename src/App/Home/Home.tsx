import React from "react";
import { Backdrop } from "./Backdrop/Backdrop";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className={"Home"} data-testid={"Home"}>
      <main>
        <Backdrop />
        <div id={"content"}>
          <p>
            This website is in active development. Feel free to look around or
            visit its{" "}
            <a href={"https://github.com/DRob1260/drew-robert-site"}>
              repository
            </a>
            !
          </p>
        </div>
      </main>
    </div>
  );
};

export { Home };
