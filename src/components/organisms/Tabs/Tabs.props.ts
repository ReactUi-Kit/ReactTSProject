import { ComponentProps } from "react";

export type TabProps = {
  label: string;
  children: React.ReactNode;
};

export type TabsProps = ComponentProps<"div"> & {
  tabs: TabProps[];
};
