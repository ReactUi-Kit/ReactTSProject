import React from "react";
import { RadioProps } from "./Radio.props";
import * as Styled from "./Radio.style"

export default function Radiobox({ label, options, textColor, textSize, width, ...RadioProps }: RadioProps) {
  return (
    <Styled.Radio
    textColor={textColor}
    textSize={textSize}
    width={width}>
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
    </Styled.Radio>
  );
}