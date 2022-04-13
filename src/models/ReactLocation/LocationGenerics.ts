import { MakeGenerics } from "@tanstack/react-location";
import { MyTableId, MyTableSearchParams } from "../MyTable/MyTable";

export type LocationGenerics = MakeGenerics<{
  Search: {
    [key in MyTableId]: MyTableSearchParams;
  };
}>;
