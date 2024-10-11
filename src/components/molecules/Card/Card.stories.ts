import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const AlertStory: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://images.affiches-et-posters.com/albums/3/56170/affiche-film-joker.jpg',
    imageAlt: 'joker Meilleur que batman',
    layout: "column", 
  },
};

