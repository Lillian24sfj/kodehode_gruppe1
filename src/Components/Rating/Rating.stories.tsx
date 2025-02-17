import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

/**
 *This is temporary remember to fill in details about how this component works!!!
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
