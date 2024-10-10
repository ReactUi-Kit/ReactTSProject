import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.div`
  display: flex;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  color: ${(props) => (props.isActive ? "#1976d2" : "#000")};
  border-bottom-color: ${(props) =>
    props.isActive ? "#1976d2" : "transparent"};
  transition: border-bottom-color 0.2s;

  &:focus {
    outline: none;
    border-bottom-color: #1976d2;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

export const TabPanel = styled.div`
  padding: 16px;
  border-top: none;
`;
