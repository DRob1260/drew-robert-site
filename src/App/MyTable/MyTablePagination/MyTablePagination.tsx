import React from "react";
import "./MyTablePagination.scss";
import { TableInstance } from "@tanstack/react-table";
import { IconButton, TablePagination, Tooltip } from "@material-ui/core";
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@material-ui/icons";
import { TablePaginationActionsProps } from "@material-ui/core/TablePagination/TablePaginationActions";

export type MyTablePaginationProps = {
  tableInstance: TableInstance<any>;
  dataSize: number;
};

const getRowsPerPageOptions = (numRows: number): number[] => {
  const rowsPerPageOptions = [];
  for (let i = 5; i <= numRows; i *= 2) {
    rowsPerPageOptions.push(i);
  }
  if (rowsPerPageOptions[rowsPerPageOptions.length - 1] !== numRows)
    rowsPerPageOptions[rowsPerPageOptions.length - 1] = numRows;

  return rowsPerPageOptions;
};

const MyTablePaginationActions: React.FunctionComponent<TablePaginationActionsProps> = (
  props
) => {
  const firstRow = props.page * props.rowsPerPage + 1;
  const lastRow =
    props.page * props.rowsPerPage + props.rowsPerPage < props.count
      ? props.page * props.rowsPerPage + props.rowsPerPage
      : props.count;

  return (
    <div className={"MyTablePaginationActions"}>
      <Tooltip title={"First Page"}>
        <IconButton
          onClick={(event) => props.onChangePage(event, 0)}
          disabled={props.page === 0}
        >
          <FirstPage />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Previous Page"}>
        <IconButton
          onClick={(event) => props.onChangePage(event, props.page - 1)}
          disabled={props.page === 0}
        >
          <KeyboardArrowLeft />
        </IconButton>
      </Tooltip>
      <span>
        {firstRow}-{lastRow} of {props.count}
      </span>
      <Tooltip title={"Next Page"}>
        <IconButton
          onClick={(event) => props.onChangePage(event, props.page + 1)}
          disabled={
            props.page >= Math.ceil(props.count / props.rowsPerPage) - 1
          }
        >
          <KeyboardArrowRight />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Last Page"}>
        <IconButton
          onClick={(event) =>
            props.onChangePage(
              event,
              Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1)
            )
          }
          disabled={
            props.page >= Math.ceil(props.count / props.rowsPerPage) - 1
          }
        >
          <LastPage />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export const MyTablePagination: React.FunctionComponent<MyTablePaginationProps> = ({
  tableInstance,
  dataSize,
}) => {
  return (
    <div className={"MyTablePagination"}>
      <TablePagination
        component={"div"}
        rowsPerPageOptions={[...getRowsPerPageOptions(dataSize)]}
        rowsPerPage={tableInstance.getState().pagination.pageSize}
        onChangeRowsPerPage={(event: React.ChangeEvent<HTMLInputElement>) => {
          tableInstance.setPageSize(parseInt(event.target.value));
        }}
        count={dataSize}
        page={tableInstance.getState().pagination.pageIndex}
        onChangePage={(event, newPage) => {
          tableInstance.setPageIndex(newPage);
        }}
        colSpan={3}
        labelRowsPerPage={""}
        labelDisplayedRows={() => <></>}
        SelectProps={{
          renderValue: (value) => `${value} rows`,
        }}
        ActionsComponent={MyTablePaginationActions}
      />
    </div>
  );
};
