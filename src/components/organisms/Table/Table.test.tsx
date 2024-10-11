import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";
import { Column, Row } from "./Table.props";
import { SelectedRowsProvider } from "./TableContext";

type UserRow = Row & {
  firstName: string | null;
  lastName: string;
  age: number | null;
  fullName?: string;
};

const columns: Column<UserRow>[] = [
  { field: "id", headerName: "ID", width: 70, sortable: true },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "age", headerName: "Age", width: 90 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 160,
    sortable: false,
    valueGetter: (row: any) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows: UserRow[] = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const TableTestWrapper: React.FC = () => {
  return (
    <SelectedRowsProvider>
      <Table rows={rows} columns={columns} rowsPerPage={5} />
    </SelectedRowsProvider>
  );
};

describe("Table Component", () => {
  test("renders the table with correct columns and rows", () => {
    render(<TableTestWrapper />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Full Name")).toBeInTheDocument();

    expect(screen.getByText("Snow")).toBeInTheDocument();
    expect(screen.getByText("Jon")).toBeInTheDocument();
    expect(screen.getByText("35")).toBeInTheDocument();
  });

  test("renders the pagination buttons", () => {
    render(<TableTestWrapper />);

    const nextButton = screen.getByLabelText("Next page");
    const prevButton = screen.getByLabelText("Previous page");

    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();

    expect(prevButton).toBeDisabled();

    fireEvent.click(nextButton);
    expect(prevButton).not.toBeDisabled();
  });

  test("handles row selection with checkboxes", () => {
    render(<TableTestWrapper />);

    const firstCheckbox = screen.getAllByRole("checkbox")[1];
    fireEvent.click(firstCheckbox);

    expect(firstCheckbox).toBeChecked();

    fireEvent.click(firstCheckbox);
    expect(firstCheckbox).not.toBeChecked();
  });

  test("renders custom value from valueGetter", () => {
    render(<TableTestWrapper />);

    expect(screen.getByText("Jon Snow")).toBeInTheDocument();
    expect(screen.getByText("Cersei Lannister")).toBeInTheDocument();
  });
});
