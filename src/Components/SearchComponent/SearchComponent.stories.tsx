import type { Meta, StoryObj } from "@storybook/react";
import { SearchComponent } from "./SearchComponent";

/**
 * The SearchComponent allows users to enter a search term and submit it.  
 * This story demonstrates its functionality, including how to handle user input  
 * with the `onSearch` callback. 
 */

const meta: Meta<typeof SearchComponent> = {
  title: "Components/SearchComponent",
  component: SearchComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchComponent>;

export const Default: Story = {
  args: {
    onSearch: (value) => console.log("User searched for:", value),
  },
};
