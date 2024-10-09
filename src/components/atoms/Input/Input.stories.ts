import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  args: {
    label: "Input",
    type: "text",
    min: 10,
    max: 15,
    disabled:true,
    className:``,
    name:'inputName',
    pattern: '',
    required:false,
    readOnly:false,
    labelClassName:``,
    containerClassName:``
  },
};

