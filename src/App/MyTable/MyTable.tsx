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
import { buildTableColumns, getCSVData } from "./MyTableUtils";
import { MyTablePagination } from "./MyTablePagination/MyTablePagination";

export type MyTableProps<DataType extends object> = {
  defaultData: DataType[];
  dataHeaders: { [key: string]: DataType }[];
  title?: string;
  exportCSV?: boolean;
};

export const MyTable = <DataType extends object>({
  title,
  dataHeaders,
  defaultData,
  exportCSV,
}: MyTableProps<DataType>) => {
  const table = createTable<{ Row: DataType }>();
  // const defaultColumns = buildTableColumns<DataType>(table, dataHeaders);
  const defaultColumns = table.createColumns([
    ...dataHeaders.map((dataHeader) =>
      table.createDataColumn(dataHeader.key, {
        header: dataHeader.value,
      })
    ),
  ]);
  const [data, setData] = useState(() => [...defaultData]);
  const [columns, setColumns] = useState(() => [...defaultColumns]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
    pageCount: -1, // -1 allows the table to calculate the page count for us via tableInstance.getPageCount()
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setData(defaultData);
  }, [defaultData]);

  const tableInstance = useTable(table, {
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
                {...getCSVData(tableInstance, title)}
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
          <Table {...tableInstance.getTableProps()} size={"small"}>
            <TableHead>
              {tableInstance.getHeaderGroups().map((headerGroup) => (
                <>
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
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    {headerGroup.headers.map((header) => (
                      <TableCell>
                        {header.column.getCanColumnFilter() ? (
                          <div>
                            <TextFilter column={header.column} />
                          </div>
                        ) : null}
                      </TableCell>
                    ))}
                  </TableRow>
                </>
              ))}
            </TableHead>
            <TableBody {...tableInstance.getTableBodyProps()}>
              {tableInstance.getRowModel().rows.map((row) => (
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
        <MyTablePagination
          tableInstance={tableInstance}
          dataSize={data.length}
        />
      </Paper>
    </div>
  );
};
