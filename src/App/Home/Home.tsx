import React from "react";
import backdrop from "./backdrop.jpg";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className={"Home"} data-testid={"Home"}>
      <main>
        <div>
          <div id={"backdrop-container"}>
            <img id={"backdrop"} src={backdrop} alt={"backdrop decoration"} />
            <div id={"greeting-container"}>
              <h1 id={"greeting"}>Hello World!</h1>
            </div>
          </div>
        </div>
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
