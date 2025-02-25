import { Meta, StoryObj } from "@storybook/react";
import { ReadMore, ReadMoreProps } from "./ReadMore"; // Import ReadMore instead of SignatureVR

/**
 * Meta information for Storybook:
 * - Title for the component in Storybook
 * - The component to display
 * - ArgTypes to handle user interactions and display actions in the Storybook UI
 */
export default {
  title: "Components/ReadMore", // Updated to "ReadMore"
  component: ReadMore, // Updated component to ReadMore
  argTypes: {
    onOpenChange: { action: "opened/closed" }, // This will show actions in Storybook
  },
} as Meta;

// Template for ReadMore component stories
const Template: StoryObj<ReadMoreProps> = {
  render: (args) => <ReadMore {...args} />, // Use ReadMore here
};

// Default story example with header and content text
export const Default: StoryObj<ReadMoreProps> = {
  ...Template,
  args: {
    header: "Dette regnes som helsemessige begrensninger",
    children:
      "Med helsemessige begrensninger mener vi funksjonshemming, sykdom, allergier som hindrer deg i arbeidet eller andre årsaker...",
  },
};

// OpenByDefault story example where the content is open by default
export const OpenByDefault: StoryObj<ReadMoreProps> = {
  ...Template,
  args: {
    header: "Dette regnes som helsemessige begrensninger",
    children:
      "Med helsemessige begrensninger mener vi funksjonshemming, sykdom, allergier som hindrer deg i arbeidet eller andre årsaker...",
    defaultOpen: true, // Content is open by default
  },
};
