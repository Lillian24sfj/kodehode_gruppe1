import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

/**
 * Use "rating" to grab user input values
 */

const meta: Meta<typeof Button> = {
  title: "Components/Rating",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
   
  },
};
