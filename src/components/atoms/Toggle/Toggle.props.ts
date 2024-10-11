// src/components/atoms/Toggle/Toggle.props.ts
import { ComponentProps } from "react";

export type ToggleProps = {
    label: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
