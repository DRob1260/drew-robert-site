import React, { useEffect, useState } from "react";
import "./MyTable.scss";
import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  createTable,
  useTable,
  paginateRowsFn,
  sortRowsFn,
  columnFilterRowsFn,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";
import { TextFilter } from "./Filters/TextFilter/TextFilter";
import { ArrowDownward, ArrowUpward, CloudDownload } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import { getCSVData } from "./MyTableUtils";
import { MyTablePagination } from "./MyTablePagination/MyTablePagination";

export type MyTableRow = {
  orderEntryNumber: number;
  mmeForumUsername: string;
  orderNumber: string;
  orderDate: Date;
  estimatedBuildDate: Date;
  actualBuildDate: Date;
  estimatedDeliveryDate: Date;
  actualDeliveryDate: Date;
  vin: string;
  vinReceived: boolean;
  daysBetweenOrderAndBuild: number;
  daysBetweenOrderAndDelivery: number;
  daysBetweenBuildAndDelivery: number;
  location: string;
  locationNonUS: string;
  exteriorColor: string;
  modelYear: string;
  model: string;
  driveTrain: string;
  battery: string;
};

export type MyTableProps = {
  defaultData: MyTableRow[];
  title?: string;
  exportCSV?: boolean;
};

const table = createTable<{ Row: MyTableRow }>();

const defaultColumns = table.createColumns([
  table.createDataColumn("orderEntryNumber", {
    header: "Entry Number",
  }),
  table.createDataColumn("mmeForumUsername", {
    header: "Mache-E Forum Username",
  }),
  table.createDataColumn("orderNumber", {
    header: "Order Number",
  }),
  table.createDataColumn("orderDate", {
    header: "Order Date",
  }),
  table.createDataColumn("estimatedBuildDate", {
    header: "Estimated Build Date",
  }),
  table.createDataColumn("actualBuildDate", {
    header: "Actual Build Date",
  }),
  table.createDataColumn("estimatedDeliveryDate", {
    header: "Estimated Delivery Date",
  }),
  table.createDataColumn("actualDeliveryDate", {
    header: "Actual Delivery Date",
  }),
  table.createDataColumn("vin", {
    header: "VIN",
  }),
  table.createDataColumn("vinReceived", {
    header: "VIN Received",
  }),
  table.createDataColumn("daysBetweenOrderAndBuild", {
    header: "Days Between Order & Build",
  }),
  table.createDataColumn("daysBetweenOrderAndDelivery", {
    header: "Days Between Order & Delivery",
  }),
  table.createDataColumn("daysBetweenBuildAndDelivery", {
    header: "Days Between Build & Delivery",
  }),
  table.createDataColumn("location", {
    header: "Location",
  }),
  table.createDataColumn("locationNonUS", {
    header: "Country (Non-US)",
  }),
  table.createDataColumn("exteriorColor", {
    header: "Exterior Color",
  }),
  table.createDataColumn("modelYear", {
    header: "Model Year",
  }),
  table.createDataColumn("model", {
    header: "Model",
  }),
  table.createDataColumn("driveTrain", {
    header: "Drivetrain",
  }),
  table.createDataColumn("battery", {
    header: "Battery",
  }),
]);

export const MyTable: React.FunctionComponent<MyTableProps> = ({
  title,
  defaultData,
  exportCSV,
}) => {
  const [data, setData] = useState(() => [...defaultData]);
  const [columns, setColumns] = useState(() => [...defaultColumns]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
    pageCount: -1, // -1 allows the table to calculate the page count for us via instance.getPageCount()
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setData(defaultData);
  }, [defaultData]);

  const instance = useTable(table, {
    data,
    columns,
    state: {
      columnFilters,
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    paginateRowsFn: paginateRowsFn,
    columnFilterRowsFn: columnFilterRowsFn,
    sortRowsFn,
  });

  return (
    <div className={"MyTable"}>
      <Paper>
        <Grid container>
          <Grid item xs={11}>
            {title && (
              <Typography variant={"h6"} component={"div"} id={"MyTable-title"}>
                {title}
              </Typography>
            )}
          </Grid>
          <Grid item xs={1}>
            {exportCSV && (
              <CSVLink
                {...getCSVData(instance, title)}
                id={"MyTable-csv-export"}
              >
                <IconButton>
                  <CloudDownload />
                </IconButton>
              </CSVLink>
            )}
          </Grid>
        </Grid>
        <TableContainer>
          <Table {...instance.getTableProps()} size={"small"}>
            <TableHead>
              {instance.getHeaderGroups().map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((header) => (
                    <TableCell {...header.getHeaderProps()}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...(header.column.getCanSort()
                            ? header.column.getToggleSortingProps({
                                className: "cursor-pointer select-none",
                              })
                            : {})}
                        >
                          {header.renderHeader()}
                          {header.column.getIsSorted() === "asc" ? (
                            <ArrowUpward fontSize={"small"} />
                          ) : null}
                          {header.column.getIsSorted() === "desc" ? (
                            <ArrowDownward fontSize={"small"} />
                          ) : null}
                          {header.column.getCanColumnFilter() ? (
                            <div>
                              <TextFilter column={header.column} />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...instance.getTableBodyProps()}>
              {instance.getRowModel().rows.map((row) => (
                <TableRow {...row.getRowProps()}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.renderCell()}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <MyTablePagination tableInstance={instance} dataSize={data.length} />
      </Paper>
    </div>
  );
};