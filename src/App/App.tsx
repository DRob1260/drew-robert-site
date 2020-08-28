import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { LandingPage } from "./LandingPage/LandingPage";
import { Home } from "./Home/Home";
import { CovidTracker } from "./CovidTracker/CovidTracker";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route path={"/covid-tracker"}>
            <CovidTracker />
          </Route>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/"}>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export { App };
