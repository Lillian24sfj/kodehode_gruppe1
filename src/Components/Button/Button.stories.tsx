import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

/**
 * A customizable button component with color, text color, size options and hover effect options. 
 */

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
   
  },
};


