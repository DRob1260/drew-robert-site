import React, { useEffect, useState } from "react";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import { MmeForumOrder } from "../../models/MME/api/MmeForumOrder";
import { retrieveMmeForumOrders } from "../../services/DrewRobertApi/MME";
import BackupImage from "./mme-preview-card-background-image.gif";
import "./MmePreviewCard.scss";
import { MyTable } from "../MyTable/MyTable";
import { MyTableId } from "../../models/MyTable/MyTable";

export const MmePreviewCard: React.FunctionComponent = () => {
  const [mmeForumOrders, setMmeForumOrders] = useState<MmeForumOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    retrieveMmeForumOrders()
      .then((orders) => {
        setMmeForumOrders(orders);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className={"MmePreviewCard"}>
      <PreviewCard
        title={"Mach-E Tracker"}
        description={
          "I ordered a Mustang Mach-E last year and built this tool to help monitor progress of other orders to predict when my order might be built."
        }
        path={"/mme"}
      >
        {error ? (
          <img src={BackupImage} alt={"Mach-E Forum Order Tracking Table"} />
        ) : (
          <MyTable
            tableId={MyTableId.MME_ORDERS_TABLE_PREVIEW}
            loading={loading}
            defaultData={mmeForumOrders}
            defaultPageSize={7}
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
            ]}
          />
        )}
      </PreviewCard>
    </div>
  );
};
