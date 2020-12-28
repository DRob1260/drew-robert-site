import React, { useState, useEffect } from "react";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import { LocationHistoricalRecordsClass } from "../../models/CovidTracker/api/LocationHistoricalRecordsClass";
import { GraphLineWithProperties } from "../../models/CovidTracker/graph/GraphLinesWithProperties";
import { getTerritoryHistoricalRecords } from "../../services/DrewRobertApi/Covid";
import BackupImage from "./covid-tracker-preview-card-backup-image.gif";
import { buildTotalCasesGraphLineWithProperties } from "./CovidTrackerUtils";
import { CovidTrackerLineGraph } from "./CovidTrackerLineGraph/CovidTrackerLineGraph";
import "./CovidTrackerPreviewCard.scss";
import { Typography } from "@material-ui/core";

export const CovidTrackerPreviewCard: React.FunctionComponent = () => {
  const [illinoisHistoricalRecords, setIllinoisHistoricalRecords] = useState<
    LocationHistoricalRecordsClass
  >();
  const [totalCasesGraphLine, setTotalCasesGraphLine] = useState<
    GraphLineWithProperties
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTerritoryHistoricalRecords("unitedstates", "illinois")
      .then((response) => {
        setIllinoisHistoricalRecords(response);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (illinoisHistoricalRecords) {
      const sortedHistoricalRecords = illinoisHistoricalRecords.historicalRecords.sort(
        (a, b) => {
          // @ts-ignore
          return new Date(b.testDate) - new Date(a.testDate);
        }
      );

      setTotalCasesGraphLine(
        buildTotalCasesGraphLineWithProperties(sortedHistoricalRecords, true)
      );
      setLoading(false);
    }
  }, [illinoisHistoricalRecords]);

  return (
    <div className={"CovidTrackerPreviewCard"}>
      <PreviewCard
        title={"COVID-19 Metrics Tracker"}
        description={
          "My custom-built COVID-19 Metrics Tracker provides live data on COVID-19 tests, cases, and deaths using an interactive graph and a table. It uses data from the Illinois Department of Public Health."
        }
        path={"/covid/unitedstates/illinois"}
        loading={loading}
      >
        {error && <img src={BackupImage} alt={"COVID-19 total cases graph"} />}
        <div id={"graph-preview-container"}>
          <Typography align={"center"}>Illinois Cases</Typography>
          <CovidTrackerLineGraph
            location={"Illinois"}
            graphLineWithPropertiesList={
              totalCasesGraphLine ? [totalCasesGraphLine] : []
            }
          />
        </div>
      </PreviewCard>
    </div>
  );
};
