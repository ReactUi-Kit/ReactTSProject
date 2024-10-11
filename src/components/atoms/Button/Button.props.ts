import { ComponentProps } from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
}

export type ButtonProps = ComponentProps<"button"> & {
  label: string;
  icons?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  variant?: ButtonVariant;
};
