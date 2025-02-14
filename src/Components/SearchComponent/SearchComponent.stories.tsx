/**
 * In this file you specify how to render the component inside storybook.
 * There is some boilerplate setup required to configure rendering and such.
 * Just copy these over from an existing story.
 */
import type { Meta, StoryObj } from "@storybook/react";

/** The component(s) that should be documented here */
import { SearchComponent } from "./SearchComponent";

/**
* 
 */
const meta = {
  title: "Components/SearchComponent",
  component: SearchComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof SearchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Her starts the variations you want story book
 * to display as documentation. Each export
 * becomes one displayed item.
 *
 * More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
 */
export const Default: Story = {
  args: {
  },
};
