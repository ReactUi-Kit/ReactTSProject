import React, { useState } from "react";
import {
  PaginationWrapper,
  StyledTable,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "./Table.style";
import { Row, TableProps } from "./Table.props";
import { useSelectedRows } from "./TableContext";
import Button from "../../atoms/Button/Button";

/**
 * Table renders a list of items in a tabular format.
 *
 * @param {Row[]} rows - An array of objects containing the data to be displayed in the table.
 * @param {Column[]} columns - An array of objects containing the configuration for each column in the table.
 * @param {number} rowsPerPage - The number of rows to display per page.
 */
export default function Table<T extends Row>({
  rows,
  columns,
  rowsPerPage = 5,
  ...tableProps
}: TableProps<T>) {
  const [page, setPage] = useState(0);
  const [columnSort, setColumnSort] = useState<{
    column: keyof T | null;
    order: "asc" | "desc";
  }>({ column: "id", order: "asc" });
  const { selectedRows, toggleRowSelection } = useSelectedRows();

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  // handle shown items per page
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const sortedRows = paginatedRows.sort((a, b) => {
    if (!columnSort.column) return 0;
    const order = columnSort.order === "asc" ? 1 : -1;
    const valueA = a[columnSort.column];
    const valueB = b[columnSort.column];
    if (valueA < valueB) {
      return -1 * order;
    }
    if (valueA > valueB) {
      return 1 * order;
    }
    return 0;
  });

  const handleSort = (column: keyof T) => {
    if (columnSort.column === column) {
      setColumnSort({
        column,
        order: columnSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      setColumnSort({ column, order: "asc" });
    }
  };

  // handle selected row
  const handleSelectRow = (id: number) => {
    toggleRowSelection(rows.find((row) => row.id === id) as Row);
  };

  // handle select all rows
  const handleSelectAll = () => {
    if (selectedRows.length === paginatedRows.length) {
      paginatedRows.forEach((row) => toggleRowSelection(row));
    } else {
      paginatedRows.forEach((row) => {
        if (!selectedRows.includes(row)) {
          toggleRowSelection(row);
        }
      });
    }
  };

  return (
    <>
      <StyledTable role="table" aria-label="Data table" {...tableProps}>
        <TableHead>
          <TableRow>
            <TableHeaderCell>
              <input
                type="checkbox"
                checked={selectedRows.length === paginatedRows.length}
                onChange={handleSelectAll}
                aria-label="Select all rows"
              />
            </TableHeaderCell>
            {columns.map((column) => (
              <TableHeaderCell
                key={String(column.field)}
                style={{ width: column.width }}
                onClick={() => column.sortable && handleSort(column.field)}
              >
                {column.headerName}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {sortedRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleSelectRow(row.id)}
                  aria-label={`Select row ${row.id}`}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={String(column.field)}>
                  {column.valueGetter
                    ? column.valueGetter(row)
                    : row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <PaginationWrapper>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          aria-label="Previous page"
          label="Previous"
        />
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === totalPages}
          aria-label="Next page"
          label="Next"
        />
      </PaginationWrapper>
    </>
  );
}
