import Table from "./Table";
import { Column, Row, TableProps } from "./Table.props";
import { StoryObj } from "@storybook/react";

type UserRow = Row & {
  firstName: string | null;
  lastName: string;
  age: number | null;
  fullName?: string;
};

const columns: Column<UserRow>[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "age", headerName: "Age", width: 90 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 160,
    sortable: false,
    valueGetter: (row: UserRow) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
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

type Story = StoryObj<typeof Table>;

export default { component: Table };

export const TableStory: Story = {
  args: {
    rows,
    columns: columns as Column<Row>[],
    rowsPerPage: 5,
  },
  render: (args: TableProps<Row>) => {
    return <TableProviderWrapper {...args} />;
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable table component with pagination and row selection.",
      },
    },
  },
};

function TableProviderWrapper(props: TableProps<Row>) {
  return (
    <div>
      <Table {...props} />
    </div>
  );
}
