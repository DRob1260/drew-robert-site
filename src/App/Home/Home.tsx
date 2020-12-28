import React from "react";
import { Backdrop } from "./Backdrop/Backdrop";
import { Projects } from "./Projects/Projects";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className={"Home"} data-testid={"Home"}>
      <main>
        <Backdrop />
        <div id={"content"}>
          <div id={"projects-section"}>
            <Projects />
          </div>
        </div>
      </main>
    </div>
  );
};

export { Home };
