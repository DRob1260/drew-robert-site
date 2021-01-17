import React, { useState } from "react";
import {
  Paper,
  Typography,
  CardActions,
  Fade,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { FileCopy, Launch, OpenInBrowser } from "@material-ui/icons";
import "./FooterCard.scss";

export type FooterCardProps = {
  title?: string;
  actions?: {
    open?: {
      value: string;
      label: string;
      button?: {
        color?: string;
        icon?: React.ReactChild;
      };
    };
    copy?: {
      value: string;
      label: string;
      button?: {
        color?: string;
        icon?: React.ReactChild;
      };
    };
    launch?: {
      value: () => void;
      label: string;
      button?: {
        color?: string;
        icon?: React.ReactChild;
      };
    };
  };
};

export const FooterCard: React.FunctionComponent<FooterCardProps> = ({
  title,
  actions,
  children,
}) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className={"FooterCard"}>
      <Paper
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
        data-testid={"footer-card-muipaper"}
      >
        {title && (
          <div
            className={`footer-card-title-container ${
              showActions ? "filter" : ""
            }`}
          >
            <Typography
              variant={"h6"}
              component={"div"}
              className={showActions ? "filter" : ""}
            >
              {title}
            </Typography>
          </div>
        )}
        <div className={`footer-card-children ${showActions ? "filter" : ""}`}>
          {children}
        </div>
        {actions && (
          <Fade in={showActions}>
            <CardActions data-testid={"footer-card-actions"}>
              {actions.copy && (
                <span
                  className={"footer-card-copy-button"}
                  data-testid={"footer-card-copy-button"}
                >
                  <Tooltip title={actions.copy.label}>
                    <IconButton
                      onClick={() => {
                        if (actions.copy?.value)
                          navigator.clipboard.writeText(actions.copy.value);
                      }}
                      style={{
                        color: actions.copy.button?.color || "white",
                      }}
                      data-testid={"footer-card-copy-button-iconbutton"}
                    >
                      {actions.copy.button?.icon || <FileCopy />}
                    </IconButton>
                  </Tooltip>
                </span>
              )}
              {actions.launch && (
                <span
                  className={"footer-card-launch-button"}
                  data-testid={"footer-card-launch-button"}
                >
                  <Tooltip title={actions.launch.label}>
                    <IconButton
                      onClick={actions.launch.value}
                      style={{
                        color: actions.launch.button?.color || "white",
                      }}
                    >
                      {actions.launch.button?.icon || <Launch />}
                    </IconButton>
                  </Tooltip>
                </span>
              )}
              {actions.open && (
                <span
                  className={"footer-card-open-button"}
                  data-testid={"footer-card-open-button"}
                >
                  <Tooltip title={actions.open.label}>
                    <IconButton
                      onClick={() => {
                        if (actions.open?.value)
                          window.open(actions.open.value);
                      }}
                      style={{
                        color: actions.open.button?.color || "white",
                      }}
                      data-testid={"footer-card-open-button-iconbutton"}
                    >
                      {actions.open.button?.icon || <OpenInBrowser />}
                    </IconButton>
                  </Tooltip>
                </span>
              )}
            </CardActions>
          </Fade>
        )}
      </Paper>
    </div>
  );
};
