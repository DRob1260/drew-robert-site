import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import { Twitter, AlternateEmail, GitHub } from "@material-ui/icons";
import GuldenTechLogo from "./guldentech.png";
import FlickrIcon from "./flickr-icon.svg";
import "./Footer.scss";
import { FooterCard } from "./FooterCard/FooterCard";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={"Footer"} data-testid={"Footer"}>
      <footer>
        <GridList cellHeight={"auto"} cols={4}>
          <GridListTile cols={1} rows={1} className={"github-tile"}>
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
          </GridListTile>
          <GridListTile cols={1} rows={1} className={"twitter-tile"}>
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
          </GridListTile>
          <GridListTile cols={1} rows={1} className={"flickr-tile"}>
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
              <img src={FlickrIcon} alt={"Flickr"} />
            </FooterCard>
          </GridListTile>
          <GridListTile rows={1} cols={1} className={"email-tile"}>
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
          </GridListTile>
          <GridListTile rows={1} cols={2} />
          <GridListTile rows={1} cols={2} className={"guldentech-tile"}>
            <FooterCard
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
              <Typography variant={"h5"}>Hosted on:</Typography>
              <img src={GuldenTechLogo} alt={"Gulden Tech"} />
            </FooterCard>
          </GridListTile>
        </GridList>
      </footer>
    </div>
  );
};
