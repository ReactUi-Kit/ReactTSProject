import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb"

const meta: Meta<typeof Breadcrumb> = {
    component: Breadcrumb,
  };

  export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const BreadcrumbStory: Story = {
  args: {
    options: [
      { label: "Option 1", link: "#"}, 
      { label: "Option 2", link: "#" },
      { label: "Option 3", link: "#" },
    ],
    backgroundColor: '#f0f0f0',
    textColor: '#000000',
    barSize: '100%', 
    textSize: '16px',
  },
}; 
