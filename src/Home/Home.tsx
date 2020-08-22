import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Home</h1>
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

export { Home };
