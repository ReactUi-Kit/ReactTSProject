import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: fit-content;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  /* Largeur par défaut */
  width: 300px;
  max-width: 100%;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    outline: none;
  }

  &[multiple] {
    height: auto;
    padding: 0;
    overflow: auto; 
    max-height: 6rem; 
  }

  option {
    padding: 0.25rem 0.5rem; /* Réduit le padding des options */
  }

  &[disabled] {
    background-color: #e9ecef;
    border-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
  }
`;
