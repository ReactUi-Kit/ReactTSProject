import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { ButtonVariant } from "./Button.props";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    label: "Button",
    variant: ButtonVariant.Primary,
    icons: {
      left: <span>🚀</span>,
      right: <span>🚀</span>,
    },
    onClick: () => alert("Button clicked"),
    disabled: false,
  },
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: "radio" },
    },
  },
};
