import React from "react";
import { SelectProps } from "./Select.props";

export default function Select({ label, options, multiple = false, ...selectProps }: SelectProps) {
  return (
    <div>
      <label>{label}</label>
      <select multiple={multiple} {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
