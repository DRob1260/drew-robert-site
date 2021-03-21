import React from "react";
import { MmeForumOrderTable } from "./MmeForumOrderTable/MmeForumOrderTable";
import "./MME.scss";

export const MME: React.FunctionComponent = () => {
  return (
    <div className={"MME"}>
      <MmeForumOrderTable />
    </div>
  );
};
