import Accordion from "./Accordion";
import { StoryObj } from "@storybook/react";
import { AccordionProps } from "./Accordion.props";

type Story = StoryObj<typeof Accordion>;

export default { component: Accordion };

const accordionItems = [
  {
    title: "Accordion Item 1",
    content: (
      <div>
        <p>This is a paragraph inside item 1.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Accordion Item 2",
    content: (
      <div>
        <p>This is some more complex content in item 2.</p>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
      </div>
    ),
  },
  {
    title: "Accordion Item 3",
    content: (
      <div>
        <p>This is the content for item 3, and it can be any React element.</p>
      </div>
    ),
  },
];

export const DefaultAccordion: Story = {
  args: {
    items: accordionItems,
  },
  render: (args: AccordionProps) => {
    return <Accordion {...args} />;
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable accordion component that allows multiple panels to be open at the same time. It includes smooth transition animations and accessibility features such as keyboard navigation.",
      },
    },
  },
};
