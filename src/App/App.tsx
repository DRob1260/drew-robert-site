import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { Home } from "./Home/Home";
import { CovidTracker } from "./CovidTracker/CovidTracker";
import { Footer } from "./Footer/Footer";
import "./App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route
            path={"/covid/:country/:state/:region?"}
            render={(routeProps) => (
              <div className={"content-wrapper top-padding"}>
                <CovidTracker
                  country={routeProps.match.params.country}
                  territory={routeProps.match.params.state}
                  region={routeProps.match.params.region}
                />
              </div>
            )}
          />
          <Route path={"/"}>
            <div className={"content-wrapper"}>
              <Home />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
      <div id={"footer-wrapper"}>
        <Footer />
      </div>
    </div>
  );
};

export { App };
