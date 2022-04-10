import React from "react";
import { Column } from "@tanstack/react-table";
import { InputAdornment, TextField } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";

export type TextFilterProps = {
  column: Column<any>;
};

export const TextFilter: React.FunctionComponent<TextFilterProps> = ({
  column,
}) => {
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
        value={(column.getColumnFilterValue() ?? "") as string}
        onChange={(event) => column.setColumnFilterValue(event.target.value)}
      />
    </div>
  );
};
