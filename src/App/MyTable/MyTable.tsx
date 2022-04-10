import React, { useEffect, useState } from "react";
import "./MyTable.scss";
import {
  Grid,
  IconButton,
  LinearProgress,
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

export type MyTableProps<DataType extends object> = {
  defaultData: DataType[];
  defaultColumns: { accessorKey: keyof DataType; header: string }[];
  title?: string;
  exportCSV?: boolean;
  loading?: boolean;
  defaultPageSize?: number;
};

export const MyTable = <DataType extends object>({
  title,
  defaultColumns,
  defaultData,
  exportCSV,
  loading,
  defaultPageSize = 5,
}: MyTableProps<DataType>) => {
  const table = createTable<{ Row: DataType }>();
  const defaultTableColumns = table.createColumns([
    ...defaultColumns.map((column) =>
      // todo: figure out a way around this ts-ignore
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      table.createDataColumn(column.accessorKey, column)
    ),
  ]);
  const [data, setData] = useState(() => [...defaultData]);
  const [columns] = useState(() => [...defaultTableColumns]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: defaultPageSize,
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
              {loading && (
                <TableRow id={"MyTable-loading-indicator-row"}>
                  <TableCell colSpan={columns.length}>
                    <LinearProgress />
                  </TableCell>
                </TableRow>
              )}
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
