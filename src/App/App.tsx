import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigator } from "./Navigator/Navigator";
import { Home } from "../Home/Home";

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <Navigator />
      <BrowserRouter>
        <Switch>
          <Route path={"/page1"}>
            <div>Page 1</div>
          </Route>
          <Route path={"/page2"}>
            <div>Page 2</div>
          </Route>
          <Route path={"/page3"}>
            <div>Page 3</div>
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
