import React from "react";
import { Column } from "@tanstack/react-table";
import { InputAdornment, TextField } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import { useNavigate } from "@tanstack/react-location";
import { LocationGenerics } from "../../../../models/ReactLocation/LocationGenerics";
import {
  MyTableFilterSearchParam,
  MyTableId,
} from "../../../../models/MyTable/MyTable";

export type TextFilterProps<DataType extends object> = {
  tableId: MyTableId;
  column: Column<DataType>;
};

export const TextFilter = <DataType extends object>({
  tableId,
  column,
}: TextFilterProps<DataType>) => {
  const navigate = useNavigate<LocationGenerics>();

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
        value={column.getColumnFilterValue() as string}
        onChange={(event) =>
          navigate({
            search: (old) => {
              const newFilterValue = {
                id: column.accessorKey || "UNKNOWN",
                value: event.target.value,
              };
              let filters: MyTableFilterSearchParam =
                old?.[tableId]?.filters || [];

              let replaced = false;
              filters = filters.map((f) => {
                if (f.id === column.accessorKey) {
                  f.value = newFilterValue.value;
                  replaced = true;
                }
                return f;
              });
              if (!replaced) filters.push(newFilterValue);

              return {
                ...old,
                filters,
              };
            },
          })
        }
      />
    </div>
  );
};
