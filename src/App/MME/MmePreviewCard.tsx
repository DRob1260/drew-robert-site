import React, { useEffect, useState } from "react";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import { mmeForumOrderTableColumns } from "./MmeForumOrders/MmeForumOrders";
import { MmeForumOrder } from "../../models/MME/api/MmeForumOrder";
import { retrieveMmeForumOrders } from "../../services/DrewRobertApi/MME";
import { tableIcons } from "../CovidTracker/CovidTrackerTable/TableIcons";
import MaterialTable from "material-table";
import BackupImage from "./mme-preview-card-background-image.gif";
import "./MmePreviewCard.scss";

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
          "I ordered a Mustang Mach-E and am (impatiently) waiting on updates for its production and delivery. To pass my time, I'm building some tools to help keep an eye on the progress of orders!"
        }
        path={"/mme"}
        loading={loading}
      >
        {error ? (
          <img src={BackupImage} alt={"Mach-E Forum Order Tracking Table"} />
        ) : (
          <MaterialTable
            title={"Submitted Orders"}
            columns={mmeForumOrderTableColumns}
            data={mmeForumOrders}
            options={{
              search: false,
              exportButton: true,
              exportAllData: true,
              pageSizeOptions: [2],
              pageSize: 2,
              header: true,
              toolbar: false,
            }}
            icons={tableIcons}
            localization={{
              body: {
                emptyDataSourceMessage: null,
              },
            }}
          />
        )}
      </PreviewCard>
    </div>
  );
};
