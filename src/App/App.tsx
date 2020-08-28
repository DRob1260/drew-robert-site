import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { LandingPage } from "./LandingPage/LandingPage";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Navigator />
        <div className={"content"}>
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
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export { App };
