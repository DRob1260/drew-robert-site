import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { LandingPage } from "./LandingPage/LandingPage";
import { Home } from "./Home/Home";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <Navigator />
      <BrowserRouter>
        <Switch>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/"}>
            <div>
              <LandingPage />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export { App };
