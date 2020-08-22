import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const LandingPage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Landing Page</h1>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    marginLeft: "10px",
    marginRight: "10px",
  },
});

export { LandingPage };
