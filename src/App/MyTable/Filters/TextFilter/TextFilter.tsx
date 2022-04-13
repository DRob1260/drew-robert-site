import React from "react";
import { Column } from "@tanstack/react-table";
import { InputAdornment, TextField } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import { MyTableId } from "../../../../models/MyTable/MyTable";

export type TextFilterProps<DataType extends object> = {
  tableId: MyTableId;
  column: Column<DataType>;
};

export const TextFilter = <DataType extends object>({
  column,
}: TextFilterProps<DataType>) => {
  // todo: figure out why filtering on number values doesn't work well
  return (
    <div className={"TextFilter"}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position={"start"}>
              <FilterList />
            </InputAdornment>
          ),
        }}
        type={"text"}
        value={column.getColumnFilterValue()}
        onChange={(event) =>
          column.setColumnFilterValue(event.target.value as string)
        }
      />
    </div>
  );
};
