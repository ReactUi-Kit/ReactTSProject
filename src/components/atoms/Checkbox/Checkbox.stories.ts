import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
  };

  export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxStory: Story = {
  args: {
    label: "Checkbox",
    options: [
      { label: "Option 1", value: "option1" }, 
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    textColor: '#000000',
    textSize: '16px',
    width: 'auto'
  },
};
