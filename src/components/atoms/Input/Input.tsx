import React, { useState } from "react";
import { InputProps } from "./Input.props";
import * as Style from "./Input.style";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Input(props: InputProps) {
  const {
    label,
    labelClassName,
    containerClassName,
    type = "text",
    ...inputProps
  } = props;

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const conditionalProps = {
    ...(type === "text" || type === "password"
      ? { minLength: inputProps.minLength, maxLength: inputProps.maxLength }
      : {}),
    ...(type === "number" ||
    type === "range" ||
    type === "date" ||
    type === "time"
      ? { min: inputProps.minLength, max: inputProps.maxLength }
      : {}),
  };

  return (
    <Style.InputContainer className={containerClassName}>
      {label && (
        <Style.Label htmlFor={inputProps.name} className={labelClassName}>
          {label}
        </Style.Label>
      )}
      <Style.InputWrapper>
        <Style.Input
          {...inputProps}
          type={isPasswordVisible ? "text" : type}
          {...conditionalProps}
        />
        {type === "password" && (
          <Style.ToggleVisibilityButton
            onClick={handleTogglePasswordVisibility}
            type="button"
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
          </Style.ToggleVisibilityButton>
        )}
      </Style.InputWrapper>
    </Style.InputContainer>
  );
}
