import { ComponentProps } from "react";

export type BreadcrumbProps = ComponentProps<"div"> & {
    options: { label: string; link: string }[];
    backgroundColor: string,
    textColor: string
    barSize: string; 
    textSize: string;
  }