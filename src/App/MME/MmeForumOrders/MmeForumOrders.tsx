import React from "react";
import MaterialTable, { Column } from "material-table";
import { MmeForumOrder } from "../../../models/MME/api/MmeForumOrder";
import { tableIcons } from "../../CovidTracker/CovidTrackerTable/TableIcons";

export const mmeForumOrderTableColumns: Column<MmeForumOrder>[] = [
  {
    title: "Entry Number",
    field: "orderEntryNumber",
  },
  {
    title: "Mache-E Forum Username",
    field: "mmeForumUsername",
  },
  {
    title: "Order Number",
    field: "orderNumber",
  },
  {
    title: "Order Date",
    field: "orderDate",
    type: "date",
  },
  {
    title: "Estimated Build Date",
    field: "estimatedBuildDate",
    type: "date",
  },
  {
    title: "Actual Build Date",
    field: "actualBuildDate",
    type: "date",
  },
  {
    title: "Estimated Delivery Date",
    field: "estimatedDeliveryDate",
    type: "date",
  },
  {
    title: "Actual Delivery Date",
    field: "actualDeliveryDate",
    type: "date",
  },
  {
    title: "VIN",
    field: "vin",
  },
  {
    title: "VIN Received",
    field: "vinReceived",
  },
  {
    title: "Days Between Order & Build",
    field: "daysBetweenOrderAndBuild",
  },
  {
    title: "Days Between Order & Delivery",
    field: "daysBetweenOrderAndDelivery",
  },
  {
    title: "Days Between Build & Delivery",
    field: "daysBetweenBuildAndDelivery",
  },
  {
    title: "Location",
    field: "location",
  },
  {
    title: "Country (Non-US)",
    field: "locationNonUS",
  },
  {
    title: "Exterior Color",
    field: "exteriorColor",
  },
  {
    title: "Model Year",
    field: "modelYear",
  },
  {
    title: "Model",
    field: "model",
  },
  {
    title: "Drivetrain",
    field: "driveTrain",
  },
  {
    title: "Battery",
    field: "battery",
  },
];

export const MmeForumOrders: React.FunctionComponent<{
  mmeForumOrders: MmeForumOrder[];
}> = ({ mmeForumOrders }) => {
  return (
    <div className={"MmeForumOrders"}>
      <MaterialTable
        title={"Submitted Orders"}
        columns={mmeForumOrderTableColumns}
        data={mmeForumOrders}
        options={{
          filtering: true,
          sorting: true,
          search: false,
          exportButton: true,
          exportAllData: true,
          pageSizeOptions: [5, 10, 20, 40, 80, 160, 320, 640, 1280],
        }}
        icons={tableIcons}
        localization={{
          body: {
            emptyDataSourceMessage: null,
          },
        }}
      />
    </div>
  );
};
