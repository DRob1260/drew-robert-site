import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { Home } from "./Home/Home";
import { CovidTracker } from "./CovidTracker/CovidTracker";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route path={"/covid"}>
            <CovidTracker />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export { App };
