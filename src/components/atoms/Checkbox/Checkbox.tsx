import React from "react";
import { CheckboxProps } from "./Checkbox.props";

export default function Select({ label, options, multiple = true, ...CheckboxProps }: CheckboxProps) {
  if (multiple) {
    // Si `multiple` est vrai, on rend des checkboxes
    return (
      <div>
        <label>{label}</label>
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="checkbox"
              id={option.value}
              value={option.value}
              {...(CheckboxProps)}            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }
}