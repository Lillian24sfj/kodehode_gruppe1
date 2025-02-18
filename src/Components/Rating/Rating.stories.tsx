import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

/**
 * Use "rating" to grab user input values
 */

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
   
  },
};
