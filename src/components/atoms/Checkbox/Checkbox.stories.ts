import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Checkbox"

const meta: Meta<typeof Select> = {
    component: Select,
  };

  export default meta;
type Story = StoryObj<typeof Select>;

export const CheckboxStory: Story = {
  args: {
    label: "Checkbox",
    options: [
      { label: "Option 1", value: "option1" }, 
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};
