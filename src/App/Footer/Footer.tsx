import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Twitter, AlternateEmail, GitHub } from "@material-ui/icons";
import GuldenTechLogo from "./guldentech.png";
import FlickrIcon from "./flickr-icon.svg";
import "./Footer.scss";
import { FooterCard } from "./FooterCard/FooterCard";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={"Footer"} data-testid={"Footer"}>
      <footer>
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            sm={2}
            md={1}
            className={"github-tile"}
            data-testid={"github-tile"}
          >
            <FooterCard
              actions={{
                open: {
                  value: "https://www.github.com/drob1260",
                  label: "Open GitHub profile",
                },
                copy: {
                  value: "drob1260",
                  label: "Copy username",
                },
              }}
            >
              <GitHub />
            </FooterCard>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            md={1}
            className={"twitter-tile"}
            data-testid={"twitter-tile"}
          >
            <FooterCard
              actions={{
                open: {
                  value: "https://www.twitter.com/drewrobertdev",
                  label: "Open Twitter account",
                },
                copy: {
                  value: "@drewrobertdev",
                  label: "Copy Twitter handle",
                },
              }}
            >
              <Twitter />
            </FooterCard>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            md={1}
            className={"flickr-tile"}
            data-testid={"flickr-tile"}
          >
            <FooterCard
              actions={{
                open: {
                  value: "https://www.flickr.com/people/drewrobert",
                  label: "Open Flickr feed",
                  color: "black",
                },
                copy: {
                  value: "https://www.flickr.com/people/drewrobert",
                  label: "Copy URL",
                  color: "black",
                },
              }}
            >
              <img src={FlickrIcon} alt={"Flickr"} style={{ width: "65%" }} />
            </FooterCard>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            md={1}
            className={"email-tile"}
            data-testid={"email-tile"}
          >
            <FooterCard
              actions={{
                open: {
                  value: "mailto:drew.robert26@me.com",
                  label: "Send email",
                },
                copy: {
                  value: "drew.robert26@me.com",
                  label: "Copy email address",
                },
              }}
            >
              <AlternateEmail />
            </FooterCard>
          </Grid>
          <Grid item xs={false} sm />
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            className={"guldentech-tile"}
            data-testid={"guldentech-tile"}
          >
            <FooterCard
              title={"Hosted by:"}
              actions={{
                open: {
                  value: "https://www.guldentech.com",
                  label: "Gulden Tech website",
                },
                copy: {
                  value: "www.guldentech.com",
                  label: "Copy URL",
                },
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src={GuldenTechLogo}
                alt={"Gulden Tech"}
              />
            </FooterCard>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};
