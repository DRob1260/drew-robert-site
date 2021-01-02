import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { FileCopy, OpenInNew } from "@material-ui/icons";
import "./FooterCard.scss";

export type FooterCardProps = {
  title?: string;
  actions?: {
    open?: {
      value: string;
      label: string;
      color?: string;
    };
    copy?: {
      value: string;
      label: string;
      color?: string;
    };
  };
  cols?: number;
  rows?: number;
};

export const FooterCard: React.FunctionComponent<FooterCardProps> = ({
  title,
  actions,
  children,
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className={"FooterCard"}>
      <Card
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        {title && (
          <CardHeader title={title} className={showActions ? "filter" : ""} />
        )}
        <CardContent className={showActions ? "filter" : ""}>
          <div className={"footer-card-children"}>{children}</div>
        </CardContent>
        {actions && (
          <Fade in={showActions}>
            <CardActions>
              {actions.copy && (
                <span className={"footer-card-copy-button"}>
                  <Tooltip title={actions.copy.label}>
                    <IconButton
                      onClick={() => {
                        if (actions.copy?.value)
                          navigator.clipboard.writeText(actions.copy.value);
                      }}
                      style={{
                        color: actions.copy.color || "white",
                      }}
                    >
                      <FileCopy />
                    </IconButton>
                  </Tooltip>
                </span>
              )}
              {actions.open && (
                <span className={"footer-card-open-button"}>
                  <Tooltip title={actions.open.label}>
                    <IconButton
                      onClick={() => {
                        if (actions.open?.value)
                          window.open(actions.open.value);
                      }}
                      style={{
                        color: actions.open.color || "white",
                      }}
                    >
                      <OpenInNew />
                    </IconButton>
                  </Tooltip>
                </span>
              )}
            </CardActions>
          </Fade>
        )}
      </Card>
    </div>
  );
};
