import React from "react";
import { RadioProps } from "./Radio.props";

export default function Radiobox({ label, options, ...RadioProps }: RadioProps) {
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="singleOption"
            value={option.value}
            {...(RadioProps as React.InputHTMLAttributes<HTMLInputElement>)} // Props spécifiques pour input
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}