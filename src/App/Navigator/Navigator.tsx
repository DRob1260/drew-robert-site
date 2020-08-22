import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import "./Navigator.scss";
import { makeStyles } from "@material-ui/core/styles";

const Navigator: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigator}>
      <Toolbar>
        <Button variant={"contained"} className={classes.leftButton} href={"/"}>
          Home
        </Button>
        <Button
          variant={"contained"}
          className={classes.button}
          href={"/page1"}
        >
          Page 1
        </Button>
        <Button
          variant={"contained"}
          className={classes.button}
          href={"/page2"}
        >
          Page 2
        </Button>
        <Button
          variant={"contained"}
          className={classes.rightButton}
          href={"/page3"}
        >
          Page 3
        </Button>
      </Toolbar>
    </div>
  );
};

const buttonBorderRadius = "5px";

const useStyles = makeStyles({
  navigator: {
    margin: "5px",
    backgroundColor: "#9131f7",
    borderRadius: "8px",
  },
  leftButton: {
    marginRight: "12px",
    borderRadius: buttonBorderRadius,
  },
  button: {
    marginLeft: "12px",
    marginRight: "12px",
    borderRadius: buttonBorderRadius,
  },
  rightButton: {
    marginLeft: "12px",
    borderRadius: buttonBorderRadius,
  },
});

export { Navigator };
