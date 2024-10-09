import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input"> & {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
};
