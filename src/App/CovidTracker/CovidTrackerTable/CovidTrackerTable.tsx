import React from "react";
import MaterialTable from "material-table";
import { CovidTrackerTableRow } from "../../../models/CovidTracker/table/CovidTrackerTableRow";
import {
  covidTrackerTableColumns,
  getExportName,
} from "./CovidTrackerTableUtilities";
import { tableIcons } from "./TableIcons";

export interface CovidTrackerTableProps {
  tableRows: CovidTrackerTableRow[];
  location: string;
}

export const CovidTrackerTable: React.FunctionComponent<CovidTrackerTableProps> = ({
  tableRows,
  location,
}) => {
  return (
    <div className={"CovidTrackerTable"} data-testid={"CovidTrackerTable"}>
      {tableRows.length > 0 && (
        <div data-testid={"covid-table"}>
          <MaterialTable
            columns={covidTrackerTableColumns}
            data={tableRows}
            icons={tableIcons}
            title={`${location} COVID-19 Data`}
            options={{
              search: false,
              pageSize: 10,
              pageSizeOptions: [5, 10, 20, 40, 80, 160, 360],
              exportButton: true,
              exportFileName: getExportName(),
              exportAllData: true,
            }}
            localization={{
              pagination: {
                firstAriaLabel: "First",
                lastAriaLabel: "Last",
                previousAriaLabel: "Previous",
                nextAriaLabel: "Next",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

CovidTrackerTable.defaultProps = {
  tableRows: [],
  location: "",
};
