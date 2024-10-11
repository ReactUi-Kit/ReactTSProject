import React from "react";
import { CheckboxProps } from "./Checkbox.props";
import * as Styled from "./Checkbox.style"

export default function Checkbox({ label, options, textColor, textSize, width, ...checkboxProps }: CheckboxProps) {
  return (
    <Styled.Checkbox
      textColor={textColor}
      textSize={textSize}
      width={width}
    >
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
    </Styled.Checkbox>
  );
}