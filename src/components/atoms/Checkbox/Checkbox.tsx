import React from "react";
import { CheckboxProps } from "./Checkbox.props";

export default function Checkbox({ label, options, ...checkboxProps }: CheckboxProps) {
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            value={option.value}
            {...(checkboxProps)}            />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}