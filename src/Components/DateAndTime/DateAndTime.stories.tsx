/**
 * In this file you specify how to render the component inside storybook.
 * There is some boilerplate setup required to configure rendering and such.
 * Just copy these over from an existing story.
 */
import type { Meta, StoryObj } from "@storybook/react";

/** The component(s) that should be documented here */
import { DateAndTime } from "./DateAndTime";
import { useEffect } from "react"
/**
 * Meta information about this page and how to render this component
 * can be configured here. Of note is the title it should be displayed under,
 * along with any organizational structures like root directory.
 *
 * More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta = {
  title: "Components/DateAndTime",
  component: DateAndTime,
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
} satisfies Meta<typeof DateAndTime>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Her starts the variations you want story book
 * to display as documentation. Each export
 * becomes one displayed item.
 *
 * More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
 */
export const Default: Story = {};

export const WithPresetDate: Story = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const dateInput = document.querySelector('input[type="datetime-local"]') as HTMLInputElement;
        if (dateInput) {
          const presetDate = new Date('2024-02-20T10:30');
          dateInput.value = presetDate.toISOString().slice(0, 16);
          dateInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, []);
      return <Story />;
    },
  ],
};

export const InteractiveExample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Try selecting a date and copying it to the clipboard.',
      },
    },
  },
};