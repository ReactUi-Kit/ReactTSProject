import Carousel from "./Carousel";
import { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Carousel>;

export default { component: Carousel };

const carouselItems = [
  <div key="1" style={{ backgroundColor: "red", height: "200px" }} />,
  <div key="2" style={{ backgroundColor: "blue", height: "200px" }} />,
  <div key="3" style={{ backgroundColor: "green", height: "200px" }} />,
];

export const DefaultCarousel: Story = {
  args: {
    items: carouselItems,
    options: {
      showArrows: true,
      autoPlay: false,
      interval: 3000,
      fullWidth: false,
      freeMode: true,
      showPagination: true,
      loop: true,
    },
  },
  render: (args) => {
    return <Carousel {...args} />;
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable carousel component with accessibility features and keyboard navigation.",
      },
    },
  },
};
