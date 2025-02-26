import type { Meta, StoryObj } from "@storybook/react"; // Import Meta and StoryObj for typing

// Import the ReadMore component
import { ReadMore } from "./ReadMore";

/**
 * Meta information about this page and how to render this component
 * can be configured here. Of note is the title it should be displayed under,
 * along with any organizational structures like root directory.
 *
 * More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta = {
  title: "Components/ReadMore", // Component title in Storybook
  component: ReadMore, // The component to be displayed
  parameters: {
    layout: "centered", // Optional: Center the component in the Canvas for better visibility
  },
  tags: ["autodocs"], // Auto-generated documentation for the component
  argTypes: {
    // Controls for each prop, like 'header' and 'children'
    header: { control: "text" }, // Provide a text control for the 'header' prop
    children: { control: "text" }, // Provide a text control for the 'children' prop
  },
} satisfies Meta<typeof ReadMore>; // Type the meta for ReadMore component

export default meta; // Export the meta for Storybook

type Story = StoryObj<typeof meta>; // Define the Story type based on the meta

/**
 * Default story example with header and content text.
 * This will show the component in its default state.
 */
export const Default: Story = {
  args: {
    header: "Dette regnes som helsemessige begrensninger", // Provide a default header text
    children:
      "Med helsemessige begrensninger mener vi funksjonshemming, sykdom, allergier som hindrer deg i arbeidet eller andre årsaker...",
  },
};

/**
 * OpenByDefault story example where the content is open by default.
 * This shows how the component behaves when the content is already visible.
 */
export const OpenByDefault: Story = {
  args: {
    header: "Dette regnes som helsemessige begrensninger",
    children:
      "Med helsemessige begrensninger mener vi funksjonshemming, sykdom, allergier som hindrer deg i arbeidet eller andre årsaker...",
  },
};
