import React from "react";
import "./App.scss";
import { Navigator } from "./Navigator/Navigator";
import { Home } from "./Home/Home";
import { RedcycleLandingPage } from "./RedcycleLandingPage/RedcycleLandingPage";
import { Footer } from "./Footer/Footer";
import { MME } from "./MME/MME";
import { ReactLocation, Router, Outlet } from "@tanstack/react-location";
// import { ReactLocationDevtools } from "@tanstack/react-location-devtools";

const location = new ReactLocation();

const App: React.FunctionComponent = () => {
  return (
    <div className={"App"}>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: (
              <div className={"content-wrapper"}>
                <Home />
              </div>
            ),
          },
          {
            path: "/mme",
            element: (
              <div className={"content-wrapper top-padding"}>
                {" "}
                <MME />
              </div>
            ),
          },
          {
            path: "/redcycle-landing-page",
            element: (
              <div className={"content-wrapper top-padding"}>
                <RedcycleLandingPage />
              </div>
            ),
          },
        ]}
      >
        <Navigator />
        <div id={"footer-wrapper"}>
          <Footer />
        </div>
        <Outlet />
        {/*<ReactLocationDevtools />*/}
      </Router>
      {/*<BrowserRouter>*/}
      {/*  <Navigator />*/}
      {/*  <Switch>*/}
      {/*    <Route*/}
      {/*      path={"/redcycle-landing-page"}*/}
      {/*      render={() => (*/}
      {/*        <div className={"content-wrapper top-padding"}>*/}
      {/*          <RedcycleLandingPage />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <Route*/}
      {/*      path={"/mme"}*/}
      {/*      render={() => (*/}
      {/*        <div className={"content-wrapper top-padding"}>*/}
      {/*          <MME />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    />*/}
      {/*    <Route path={"/"}>*/}
      {/*      <div className={"content-wrapper"}>*/}
      {/*        <Home />*/}
      {/*      </div>*/}
      {/*    </Route>*/}
      {/*  </Switch>*/}
      {/*</BrowserRouter>*/}
    </div>
  );
};

export { App };
