import React from "react";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className={"Home"} data-testid={"Home"}>
      <main>
        <h1>Welcome Home.</h1>
        <p>Our home is currently empty but check back later.</p>
      </main>
    </div>
  );
};

export { Home };
