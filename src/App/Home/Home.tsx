import React from "react";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className={"Home"} data-testid={"Home"}>
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
};

export { Home };
