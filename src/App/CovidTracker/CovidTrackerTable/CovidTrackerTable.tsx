import React from "react";
import MaterialTable from "material-table";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";
import { covidTrackerTableColumns } from "./CovidTrackerTableUtilities";
import { tableIcons } from "./TableIcons";

export interface CovidTrackerTableProps {
  tableRows: CovidTrackerTableRow[];
}

export const CovidTrackerTable: React.FunctionComponent<CovidTrackerTableProps> = ({
  tableRows,
}) => {
  return (
    <div className={"CovidTrackerTable"}>
      <MaterialTable
        columns={covidTrackerTableColumns}
        data={tableRows}
        icons={tableIcons}
      />
    </div>
  );
};
