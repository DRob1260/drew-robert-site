import { TableInstance } from "@tanstack/react-table";
import { DateTime } from "luxon";

type CSVHeader = {
  label: string;
  key: string;
};

export const getCSVData = (
  instance: TableInstance<any>,
  title?: string
): { headers: Array<CSVHeader>; data: Array<any>; filename: string } => {
  const headers: Array<CSVHeader> = [];
  const data: Array<any> = [];

  instance.getHeaderGroups().forEach((headerGroup) => {
    headerGroup.headers.forEach((header) => {
      headers.push({ label: header.column.header as string, key: header.id });
    });
  });

  instance.getRowModel().flatRows.forEach((row) => {
    const newRow = {};
    row.getAllCells().forEach((cell) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newRow[cell.columnId] = cell.value;
    });
    data.push(newRow);
  });

  let filename = title ? `${title} ` : "";
  const dateTime = DateTime.local();
  filename = filename.concat(`${dateTime.toFormat("yyyy-MM-dd")}.csv`);

  return {
    headers: headers,
    data: data,
    filename: filename,
  };
};
