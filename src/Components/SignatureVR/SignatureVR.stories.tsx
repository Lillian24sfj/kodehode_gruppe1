import { Meta, StoryObj } from "@storybook/react";
import { SignatureVR } from "./SignatureVR"; // Make sure the path is correct
import { SignatureVRProps } from "./SignatureVR"; // Import the type

export default {
  title: "Components/SignatureVR",
  component: SignatureVR,
  argTypes: {
    onOpenChange: { action: "opened/closed" }, // This will show actions in Storybook
  },
} as Meta;

// Template with SignatureVRProps type
const Template: StoryObj<SignatureVRProps> = {
  render: (args) => <SignatureVR {...args} />,
};

// Default story example
export const Default: StoryObj<SignatureVRProps> = {
  ...Template,
  args: {
    header: "Dette regnes som helsemessige begrensninger",
    children:
      "Med helsemessige begrensninger mener vi funksjonshemming, sykdom, allergier som hindrer deg i arbeidet eller andre årsaker...",
  },
};

// OpenByDefault story example
export const OpenByDefault: StoryObj<SignatureVRProps> = {
  ...Template,
  args: {
    header: "Dette regnes som helsemessige begrensninger",
    children:
      "Med helsemessige begrensninger mener vi funksjonshemming, sykdom, allergier som hindrer deg i arbeidet eller andre årsaker...",
    defaultOpen: true,
  },
};
