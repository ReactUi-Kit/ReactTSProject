import React, { useState } from "react";
import {
  Button,
  PaginationWrapper,
  StyledTable,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "./Table.style";
import { Row, TableProps } from "./Table.props";

export default function Table<T extends Row>({
  rows,
  columns,
  rowsPerPage = 5,
  ...tableProps
}: TableProps<T>) {
  const [page, setPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [columnSort, setColumnSort] = useState<{
    column: keyof T | null;
    order: "asc" | "desc";
  }>({ column: "id", order: "asc" });

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
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // handle select all rows
  const handleSelectAll = () => {
    if (selectedRows.length === paginatedRows.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedRows.map((row) => row.id));
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
                id={`${String(column.field)}-table-header`}
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
                  checked={selectedRows.includes(row.id)}
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
        >
          Previous
        </Button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === totalPages}
          aria-label="Next page"
        >
          Next
        </Button>
      </PaginationWrapper>
    </>
  );
}
