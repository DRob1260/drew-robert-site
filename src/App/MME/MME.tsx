import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { MmeForumOrders } from "./MmeForumOrders/MmeForumOrders";
import { MmeForumOrder } from "../../models/MME/api/MmeForumOrder";
import { retrieveMmeForumOrders } from "../../services/DrewRobertApi/MME";
import "./MME.scss";

export const MME: React.FunctionComponent = () => {
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
    <div className={"MME"}>
      <h1>Mustang Mach-E</h1>
      <p>
        I ordered a Mustang Mach-E and am (impatiently) waiting on updates on
        its production and delivery. To pass my time, I'm building some tools to
        help keep an eye on the progress of orders!
      </p>
      <div className={"mach-e-forum-orders"}>
        <div className={"mach-e-forum-orders-header"}>
          <h2>Mach-E Forum Orders</h2>
          {loading && <CircularProgress size={"1.25em"} />}
        </div>
        <p>
          These Mach-E orders are pulled live from{" "}
          <a
            href={
              "https://www.macheforum.com/site/threads/submitted-orders-tracking-list-and-stats-enter-yours.924/"
            }
          >
            this thread in the Mach-E Forum
          </a>
          . I find it useful to apply sorting and filtering to the values to
          narrow down analysis.
        </p>
        <MmeForumOrders mmeForumOrders={mmeForumOrders} />
      </div>
    </div>
  );
};
