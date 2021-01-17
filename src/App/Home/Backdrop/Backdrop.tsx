import React, { useState, useEffect } from "react";
import {
  Backdrop as MaterialBackdrop,
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
  Fade,
} from "@material-ui/core";
import { Fullscreen, FullscreenExit } from "@material-ui/icons";
import { getFlickrUserPhotoUrls } from "../../../services/DrewRobertApi/Gallery";
import { randomValue } from "../../../utilities/ArrayUtilities";
import "./Backdrop.scss";

export const Backdrop: React.FunctionComponent = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getFlickrUserPhotoUrls("69728079%40N03").then((photoUrls) => {
      const randomUrl = randomValue(photoUrls);
      setPhotoUrl(randomUrl);
    });
  }, []);

  return (
    <div className={"Backdrop"}>
      <div id={"backdrop-container"}>
        <div id={"backdrop"}>
          {photoUrl && (
            <img
              data-testid={"backdrop-image"}
              src={photoUrl}
              alt={"from my flickr feed"}
              onLoad={() => {
                setLoading(false);
              }}
            />
          )}
          <MaterialBackdrop open={loading} transitionDuration={1000}>
            <div id={"image-placeholder"} />
          </MaterialBackdrop>
        </div>
        <div id={"greeting-container"}>
          {!loading && <h1 id={"greeting"}>Hello World!</h1>}
        </div>
        <IconButton
          size={"medium"}
          onClick={() => setOpenModal(true)}
          data-testid={"full-screen-button"}
          id={"full-screen-button"}
          aria-label={"view full-size photo"}
        >
          <Fullscreen fontSize={"large"} />
        </IconButton>
      </div>
      <Modal
        open={openModal}
        closeAfterTransition={true}
        BackdropComponent={MaterialBackdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={() => setOpenModal(false)}
        id={"backdrop-photo-viewer-modal"}
      >
        <div id={"photo-viewer-container"}>
          <Fade in={openModal}>
            <Paper>
              <IconButton
                size={"medium"}
                onClick={() => setOpenModal(false)}
                id={"full-screen-exit-button"}
                data-testid={"full-screen-exit-button"}
              >
                <FullscreenExit fontSize={"large"} />
              </IconButton>
              <img
                src={photoUrl}
                alt={"from my flickr feed"}
                data-testid={"full-screen-image"}
              />
              <Button
                variant={"contained"}
                id={"flickr-link-button"}
                data-testid={"flickr-link-button"}
              >
                <a
                  href={"https://www.flickr.com/photos/69728079@N03"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  data-testid={"flickr-link"}
                >
                  View More Photos
                </a>
              </Button>
              <Typography align={"center"} variant={"subtitle2"}>
                This product uses the Flickr API but is not endorsed or
                certified by SmugMug, Inc.
              </Typography>
            </Paper>
          </Fade>
        </div>
      </Modal>
    </div>
  );
};
