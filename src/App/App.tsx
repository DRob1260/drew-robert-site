import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { Home } from "./Home/Home";
import { RedcycleLandingPage } from "./RedcycleLandingPage/RedcycleLandingPage";
import { Footer } from "./Footer/Footer";
import "./App.scss";
import { MME } from "./MME/MME";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route
            path={"/redcycle-landing-page"}
            render={() => (
              <div className={"content-wrapper top-padding"}>
                <RedcycleLandingPage />
              </div>
            )}
          />
          <Route
            path={"/mme"}
            render={() => (
              <div className={"content-wrapper top-padding"}>
                <MME />
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
