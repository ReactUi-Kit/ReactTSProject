import { ComponentProps } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = ComponentProps<"select"> & {
 
  label: string;
  options: SelectOption[];

  /**
   * Indique si le Select supporte la sélection multiple
   **/
  multiple?: boolean;
};
