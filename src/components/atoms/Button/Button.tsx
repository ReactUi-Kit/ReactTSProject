import React from "react";
import { ButtonProps } from "./Button.props";

export default function Button(props: ButtonProps) {
  const { label, ...buttonProps } = props;

  return <button {...buttonProps}>{label}</button>;
}
