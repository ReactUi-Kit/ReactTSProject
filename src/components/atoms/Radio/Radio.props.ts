import { ComponentProps } from "react";

export type RadioProps = ComponentProps<"input"> & {
    label: string,
    options: { label: string, value: string } [];
    textColor: string,
    textSize: string,
    width: string
};