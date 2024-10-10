import Carousel from "./Carousel";
import { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Carousel>;

export default { component: Carousel };

const carouselItems = [
  <img
    src="https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1"
    alt="Description 1"
    style={{
      width: "100%",
      maxHeight: "200px",
    }}
  />,
  <img
    src="https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image+2"
    alt="Description 2"
    style={{
      width: "100%",
      maxHeight: "200px",
    }}
  />,
  <img
    src="https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image+3"
    alt="Description 3"
    style={{
      width: "100%",
      maxHeight: "200px",
    }}
  />,
];

export const DefaultCarousel: Story = {
  args: {
    items: carouselItems,
    options: {
      showArrows: true,
      autoPlay: true,
      interval: 3000,
      fullWidth: false,
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
