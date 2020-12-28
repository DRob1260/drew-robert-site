import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./PreviewCard.scss";

export type PreviewCardProps = {
  title: string;
  description: string;
  loading?: boolean;
  path?: string;
};

export const PreviewCard: React.FunctionComponent<PreviewCardProps> = ({
  title,
  description,
  loading,
  path,
  children,
}) => {
  return (
    <div className={"PreviewCard"}>
      <Card raised={true}>
        <CardHeader title={title} />
        <CardMedia>
          {!loading && <div className={"children-container"}>{children}</div>}
          <Backdrop open={!!loading}>
            <div className={"backdrop-placeholder"}>
              <div
                className={"loading-indicator-container"}
                data-testid={"loading-indicator-container"}
              >
                <CircularProgress />
              </div>
            </div>
          </Backdrop>
        </CardMedia>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          {path && (
            <Link to={path} className={"link"}>
              <Button data-testid={"visit-project-button"}>
                Visit Project
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </div>
  );
};
