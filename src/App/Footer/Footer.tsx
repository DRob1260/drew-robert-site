import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import GuldenTechLogo from "./guldentech.png";
import "./Footer.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={"Footer"}>
      <footer>
        <Grid container spacing={1}>
          <Grid item sm={9} xs={12}>
            <Paper id={"primary"}>
              <Typography>{"Drew's stuff"}</Typography>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Paper id={"guldentech"}>
              <Typography variant={"h6"}>HOSTED BY:</Typography>
              <a
                href={"//guldentech.com"}
                target={"_blank"}
                rel={"noreferrer"}
                id={"logo-link"}
              >
                <img src={GuldenTechLogo} alt={"Gulden Tech"} />
              </a>
            </Paper>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};
