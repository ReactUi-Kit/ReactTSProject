import { ComponentProps } from "react";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export type AccordionProps = ComponentProps<"div"> & {
  items: AccordionItem[];
};
