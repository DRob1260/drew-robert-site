/* istanbul ignore file */
import React from "react";
import { FooterCard } from "./FooterCard";
import GuldenTechLogo from "../guldentech.png";
import { Twitter } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

export default {
  title: "FooterCard",
  component: FooterCard,
};

export const FooterCardWithAllProps = () => (
  <FooterCard
    title={"Hosted By:"}
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
    <img src={GuldenTechLogo} alt={"Gulden Tech"} />
  </FooterCard>
);

export const FooterCardWithoutTitle = () => (
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
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Twitter />
      <Typography variant={"subtitle2"}>@drewrobertdev</Typography>
    </div>
  </FooterCard>
);
