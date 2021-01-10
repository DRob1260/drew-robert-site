import React, { useState } from "react";
import {
  Paper,
  Typography,
  CardActions,
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
                        color: actions.copy.color || "white",
                      }}
                      data-testid={"footer-card-copy-button-iconbutton"}
                    >
                      <FileCopy />
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
                        color: actions.open.color || "white",
                      }}
                      data-testid={"footer-card-open-button-iconbutton"}
                    >
                      <OpenInNew />
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
