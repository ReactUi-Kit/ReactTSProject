import Tabs from "./Tabs";
import { StoryObj } from "@storybook/react";

const tabsData = [
  { label: "Tab 1", children: <div>Content for Tab 1</div> },
  { label: "Tab 2", children: <div>Content for Tab 2</div> },
  { label: "Tab 3", children: <div>Content for Tab 3</div> },
];

type Story = StoryObj<typeof Tabs>;

export default { component: Tabs };

export const TabsStory: Story = {
  args: {
    tabs: tabsData,
  },
  render: (args) => {
    return <TabsProviderWrapper {...args} />;
  },
  parameters: {
    docs: {
      description: {
        component: "An accessible and customizable tabs component.",
      },
    },
  },
};

function TabsProviderWrapper(props: any) {
  return (
    <div>
      <Tabs {...props} />
    </div>
  );
}
