import { ComponentProps } from "react";

export type CheckboxProps = ComponentProps<"input"> & {
    label: string,
    options: { label: string, value: string } [];
};