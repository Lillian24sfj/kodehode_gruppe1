/**
 * In this file you specify how to render the component inside storybook.
 * There is some boilerplate setup required to configure rendering and such.
 * Just copy these over from an existing story.
 */
import type { Meta, StoryObj } from "@storybook/react";

/** The component(s) that should be documented here */
import { Modal} from "./Modal";

/**
 * hello
 *
 * More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta = {
  title: "Components/Modal",
  component: Modal,
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
} satisfies Meta<typeof Modal>;

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
    children: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{ textAlign: "center", color: "red", marginBottom: "20px", fontSize: "26px"}}>Lorem ipsum dolor sit.</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?</p>
        <img src="https://www.guru-utvikling.no/wp-content/uploads/2017/05/Bilde-til-sak-om-bilder-1024x758.jpg" alt="" style={{width: "150px", height: "150px", marginBottom: "20px" }}/>

      </div>
    ),
  },
};



