import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio"

const meta: Meta<typeof Radio> = {
    component: Radio,
  };

  export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioStory: Story = {
  args: {
    label: "Radio",
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
