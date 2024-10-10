import styled from "styled-components";

export const AccordionWrapper = styled.div`
  width: 100%;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ccc;
`;

export const AccordionButton = styled.button<{ isOpen: boolean }>`
  background-color: #f7f7f7;
  color: #333;
  width: 100%;
  text-align: left;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:focus {
    outline: 2px solid #0077cc;
  }

  &:hover {
    background-color: #e2e2e2;
  }

  &::after {
    content: "${({ isOpen }) => (isOpen ? "-" : "+")}";
    float: right;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const AccordionPanel = styled.div<{
  isOpen: boolean;
  maxHeight: number;
}>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : "0")};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  background-color: #f1f1f1;
`;

export const AccordionContent = styled.div`
  padding: 1rem 0;
`;
