import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import GuldenTechLogo from "./guldentech.png";
import "./Footer.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={"Footer"} data-testid={"Footer"}>
      <footer>
        <Grid container spacing={1}>
          <Grid item sm={10} xs={12} />
          <Grid item sm={2} xs={12}>
            <Paper id={"guldentech"} data-testid={"guldentech"}>
              <Typography variant={"body1"}>HOSTED BY:</Typography>
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
