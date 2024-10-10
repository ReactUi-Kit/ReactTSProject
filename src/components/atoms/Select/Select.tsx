import React from "react";
import { SelectProps } from "./Select.props";
import { SelectWrapper, Label, StyledSelect } from "./Select.style";

export default function Select({ label, options, multiple = false, ...selectProps }: SelectProps) {
  return (
    <SelectWrapper>
      {label && <Label>{label}</Label>}
      <StyledSelect multiple={multiple} {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
}
