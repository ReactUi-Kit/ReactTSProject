// T must extends Row

import { ComponentProps } from "react";

// it's used for getting the row type
export type Column<T> = {
  field: keyof T;
  headerName: string;
  width?: number;
  sortable?: boolean;
  valueGetter?: (row: T) => React.ReactNode;
};

// a row must have an id field to be used in the Table component
// the rest of the fields can be anything
export type Row = {
  id: number;
  [key: string]: any;
};

export type TableProps<T> = ComponentProps<"table"> & {
  rows: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
};
