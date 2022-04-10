import React, { useEffect, useState } from "react";
import { CircularProgress, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { MmeForumOrders } from "./MmeForumOrders/MmeForumOrders";
import { MmeForumOrder } from "../../models/MME/api/MmeForumOrder";
import { retrieveMmeForumOrders } from "../../services/DrewRobertApi/MME";
import "./MME.scss";
import { MyTable } from "../MyTable/MyTable";

export const MME: React.FunctionComponent = () => {
  const [mmeForumOrders, setMmeForumOrders] = useState<MmeForumOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    retrieveMmeForumOrders()
      .then((orders) => {
        setMmeForumOrders(orders);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className={"MME"}>
      <h1>Mustang Mach-E</h1>
      <p>
        I ordered a Mustang Mach-E and am (impatiently) waiting on updates for
        its production and delivery. To pass my time, I'm building some tools to
        help keep an eye on the progress of orders!
      </p>
      <div className={"mach-e-forum-orders"}>
        <div className={"mach-e-forum-orders-header"}>
          <h2>Mach-E Forum Orders</h2>
          {loading && <CircularProgress size={"1.25em"} />}
        </div>
        <p>
          These Mach-E orders are pulled live from the data in the{" "}
          <a
            target={"_blank"}
            rel={"noopener noreferrer"}
            href={
              "https://www.macheforum.com/site/threads/submitted-orders-tracking-list-and-stats-enter-yours.924/"
            }
          >
            order tracker
          </a>{" "}
          in the Mach-E Forum. I find it useful to apply sorting and filtering
          to the values to narrow down analysis.
        </p>
        <div
          style={{
            marginBottom: "1em",
          }}
        >
          <MyTable
            title={"Submitted Orders"}
            exportCSV={true}
            defaultData={mmeForumOrders}
            defaultColumns={[
              { accessorKey: "orderEntryNumber", header: "Entry Number" },
              {
                accessorKey: "mmeForumUsername",
                header: "Mach-E Forum Username",
              },
              {
                accessorKey: "orderNumber",
                header: "Order Number",
              },
              {
                accessorKey: "orderDate",
                header: "Order Date",
              },
              {
                accessorKey: "estimatedBuildDate",
                header: "Estimated Build Date",
              },
              {
                accessorKey: "actualBuildDate",
                header: "Actual Build Date",
              },
              {
                accessorKey: "estimatedDeliveryDate",
                header: "Estimated Delivery Date",
              },
              {
                accessorKey: "actualDeliveryDate",
                header: "Actual Delivery Date",
              },
              {
                accessorKey: "vin",
                header: "VIN",
              },
              {
                accessorKey: "vinReceived",
                header: "VIN Received",
              },
              {
                accessorKey: "daysBetweenOrderAndBuild",
                header: "Days Between Order & Build",
              },
              {
                accessorKey: "daysBetweenOrderAndDelivery",
                header: "Days Between Order & Delivery",
              },
              {
                accessorKey: "daysBetweenBuildAndDelivery",
                header: "Days Between Build & Delivery",
              },
              {
                accessorKey: "location",
                header: "Location",
              },
              {
                accessorKey: "locationNonUS",
                header: "Country (Non-US)",
              },
              {
                accessorKey: "exteriorColor",
                header: "Exterior Color",
              },
              {
                accessorKey: "modelYear",
                header: "Model Year",
              },
              {
                accessorKey: "model",
                header: "Model",
              },
              {
                accessorKey: "driveTrain",
                header: "Drivetrain",
              },
              {
                accessorKey: "battery",
                header: "Battery",
              },
            ]}
          />
        </div>
        <MmeForumOrders mmeForumOrders={mmeForumOrders} />
      </div>
      <Snackbar open={error}>
        <Alert severity={"warning"}>
          Whoops! There was a problem retrieving Mach-E order data.
        </Alert>
      </Snackbar>
    </div>
  );
};
