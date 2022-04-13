export enum MyTableId {
  MME_ORDERS_TABLE = "MME_ORDERS_TABLE",
  MME_ORDERS_TABLE_PREVIEW = "MME_ORDERS_TABLE_PREVIEW",
}

export type MyTableFilterSearchParam = {
  // [key: string]:
  //   | {
  //       value: any;
  //     }
  //   | undefined;
  id: string;
  value: any;
}[];

export type MyTableSearchParams = {
  filters: MyTableFilterSearchParam;
};
