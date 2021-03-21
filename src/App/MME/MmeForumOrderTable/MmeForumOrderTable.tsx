import React, { useEffect, useState } from "react";
import MaterialTable, { Column } from "material-table";
import { MmeForumOrder } from "../../../models/MME/api/MmeForumOrder";
import { retrieveMmeForumOrders } from "../../../services/DrewRobertApi/MME";
import { tableIcons } from "../../CovidTracker/CovidTrackerTable/TableIcons";

const mmeForumOrderTableColumns: Column<MmeForumOrder>[] = [
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

export const MmeForumOrderTable: React.FunctionComponent = () => {
  const [mmeForumOrders, setMmeForumOrders] = useState<MmeForumOrder[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    retrieveMmeForumOrders().then((orders) => {
      setMmeForumOrders(orders);
      setLoading(false);
    });
  }, []);

  return (
    <div className={"MmeForumOrderTable"}>
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
        }}
        icons={tableIcons}
        isLoading={loading}
      />
    </div>
  );
};
