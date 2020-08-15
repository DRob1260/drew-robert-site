import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";

const Router: React.FunctionComponent = () => {
  return (
    <div className={"Router"}>
      <Home />
    </div>
  );
};

export { Router };
