import React, { useState, useEffect } from "react";
import { Backdrop as MaterialBackdrop } from "@material-ui/core";
import { getFlickrUserPhotoUrls } from "../../../services/DrewRobertApi/Gallery";
import { randomValue } from "../../../utilities/ArrayUtilities";
import "./Backdrop.scss";

export const Backdrop: React.FunctionComponent = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(true);

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
      </div>
    </div>
  );
};
