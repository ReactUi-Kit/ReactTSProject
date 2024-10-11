import styled from "styled-components";

export const StyledButton = styled.button<{ variant?: string }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Gap between icon and label */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: #007bff;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: #6c757d;
    color: white;
    &:hover {
      background-color: #5a6268;
    }
  `}

  ${(props) =>
    props.variant === "danger" &&
    `
    background-color: #dc3545;
    color: white;
    &:hover {
      background-color: #c82333;
    }
  `}

  ${(props) =>
    props.disabled &&
    `
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
    &:hover {
      background-color: #e0e0e0;
    }
  `}
`;
