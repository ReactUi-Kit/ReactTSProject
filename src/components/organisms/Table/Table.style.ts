import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
`;

export const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

export const TableCell = styled.td`
  padding: 8px 16px;
  text-align: left;
`;

export const TableHeaderCell = styled.th`
  padding: 8px 16px;
  text-align: left;
  font-weight: bold;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
`;

export const Button = styled.button`
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  &:disabled {
    background-color: #c1c1c1;
    cursor: not-allowed;
  }
`;
