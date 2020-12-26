import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
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
      <Card>
        <CardHeader title={title} />
        {children && <CardMedia>{children}</CardMedia>}
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          {path && (
            <Link to={path} className={"link"}>
              <Button>Visit Project</Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </div>
  );
};
