import React, { useState } from "react";
import {
  Backdrop as MaterialBackdrop,
  Grid,
  Modal,
  Typography,
  Fade,
  IconButton,
  Paper,
  Hidden,
} from "@material-ui/core";
import {
  Twitter,
  AlternateEmail,
  GitHub,
  Code,
  Email,
  FullscreenExit,
} from "@material-ui/icons";
import GuldenTechLogo from "./guldentech.png";
import FlickrIcon from "./flickr-icon.svg";
import "./Footer.scss";
import { FooterCard } from "./FooterCard/FooterCard";
import { DependencyCredits } from "../DependencyCredits/DependencyCredits";

export const Footer: React.FunctionComponent = () => {
  const [openDependenciesModal, setOpenDependenciesModal] = useState(false);

  return (
    <div className={"Footer"} data-testid={"Footer"}>
      <footer>
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            sm={2}
            lg={1}
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
            lg={1}
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
            lg={1}
            className={"flickr-tile"}
            data-testid={"flickr-tile"}
          >
            <FooterCard
              actions={{
                open: {
                  value: "https://www.flickr.com/people/drewrobert",
                  label: "Open Flickr feed",
                  button: { color: "black" },
                },
                copy: {
                  value: "https://www.flickr.com/people/drewrobert",
                  label: "Copy URL",
                  button: { color: "black" },
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
            lg={1}
            className={"email-tile"}
            data-testid={"email-tile"}
          >
            <FooterCard
              actions={{
                open: {
                  value: "mailto:drew.robert26@me.com",
                  label: "Send email",
                  button: {
                    icon: <Email />,
                  },
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
          <Hidden mdDown={true}>
            <Grid item xs />
          </Hidden>
          <Grid
            item
            xs={6}
            sm={2}
            lg={1}
            className={"dependencies-tile"}
            data-testid={"dependencies-tile"}
          >
            <FooterCard
              actions={{
                launch: {
                  value: () => {
                    setOpenDependenciesModal(true);
                  },
                  label: "View Dependencies",
                },
              }}
            >
              <Typography variant={"subtitle2"} component={"div"}>
                Dependencies
              </Typography>
              <Code />
            </FooterCard>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            lg={1}
            className={"guldentech-tile"}
            data-testid={"guldentech-tile"}
          >
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
              <Typography variant={"subtitle2"} component={"div"}>
                Web Host
              </Typography>
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
      <Modal
        open={openDependenciesModal}
        closeAfterTransition={true}
        BackdropComponent={MaterialBackdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          height: "95vh",
          width: "95vw",
          margin: "auto",
          overflow: "auto",
        }}
        onClose={() => setOpenDependenciesModal(false)}
        id={"dependencies-modal"}
        data-testid={"dependencies-modal"}
      >
        <div id={"dependency-credits-container"}>
          <Fade in={openDependenciesModal}>
            <Paper id={"modal-paper"}>
              <IconButton
                size={"medium"}
                onClick={() => setOpenDependenciesModal(false)}
                id={"full-screen-exit-button"}
                data-testid={"full-screen-exit-button"}
              >
                <FullscreenExit fontSize={"large"} />
              </IconButton>
              <DependencyCredits />
            </Paper>
          </Fade>
        </div>
      </Modal>
    </div>
  );
};
