import { ComponentProps } from "react";

export type AccordionProps = ComponentProps<"div"> & {
  items: { title: string; content: React.ReactNode }[];
};
