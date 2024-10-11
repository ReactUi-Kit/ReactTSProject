// src/components/atoms/Toggle/Toggle.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const OnToggle: Story = {
  args: {
    label: "Toggle On",
    checked: true,
  },
};

export const OffToggle: Story = {
  args: {
    label: "Toggle Off",
    checked: false,
  },
};
