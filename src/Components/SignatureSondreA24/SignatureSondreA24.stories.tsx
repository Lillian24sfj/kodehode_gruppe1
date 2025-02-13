import { ThemeProvider } from "./ThemeContext";
import SignatureSondreA24 from "./SignatureSondreA24";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignatureSondreA24> = {
  title: "Components/SignatureSondreA24",
  component: SignatureSondreA24,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SignatureSondreA24>;

export const Default: Story = {};
