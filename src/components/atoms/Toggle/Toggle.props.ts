import { ComponentProps } from "react";

export type ToggleProps = ComponentProps<"input"> & {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
};
