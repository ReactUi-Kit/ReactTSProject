import React, { createContext, useContext, useState, ReactNode } from "react";
import { Row } from "./Table.props";

interface SelectedRowsContextType {
  selectedRows: Row[];
  toggleRowSelection: (row: Row) => void;
  clearSelection: () => void;
}

const SelectedRowsContext = createContext<SelectedRowsContextType | undefined>(
  undefined
);

export const SelectedRowsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedRows, setSelectedRows] = useState<Row[]>([]);

  const toggleRowSelection = (row: Row) => {
    setSelectedRows((prev) => {
      const isSelected = prev.some((selectedRow) => selectedRow.id === row.id);
      return isSelected
        ? prev.filter((selectedRow) => selectedRow.id !== row.id)
        : [...prev, row];
    });
  };

  const clearSelection = () => {
    setSelectedRows([]);
  };

  return (
    <SelectedRowsContext.Provider
      value={{ selectedRows, toggleRowSelection, clearSelection }}
    >
      {children}
    </SelectedRowsContext.Provider>
  );
};

export const useSelectedRows = () => {
  const context = useContext(SelectedRowsContext);
  if (!context) {
    throw new Error(
      "useSelectedRows must be used within a SelectedRowsProvider"
    );
  }
  return context;
};
