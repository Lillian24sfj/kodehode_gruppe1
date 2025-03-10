import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { fetchCarouselData } from "./carouselDataService";

/**This carousel supports images with and without captions, it can also display text
 * json example:
 * "id": "uuid101",
      "type": "text",
      "title": "First Card",
      "content": "Far far away, behind the word mountains....
 */

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {},
  },
  tags: ["autodocs"],
  argTypes: {
    interval: { control: "number" },
    itemSize: { control: "object" },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  loaders: [
    async () => ({
      carouselData: await fetchCarouselData(),
    }),
  ],
  render: (args, { loaded: { carouselData } }) => (
    <Carousel {...args} data={carouselData} />
  ),
};

/**
 * Can fetch data from external sources
 */

export const WithDataFetching: Story = {
  loaders: [
    async () => ({
      carouselData: await fetchCarouselData(),
    }),
  ],
  render: (args, { loaded: { carouselData } }) => (
    <Carousel {...args} data={carouselData} />
  ),
};
/**
 * How it looks with one item
 */
export const SingleItem: Story = {
  loaders: [
    async () => {
      const items = await fetchCarouselData();
      return { singleItem: items[0] || null };
    },
  ],
  render: (args, { loaded: { singleItem } }) => {
    if (!singleItem) {
      return <div>Failed to load item</div>;
    }
    return <Carousel {...args} data={[singleItem]} />;
  },
};

/**
 * When there is no items:
 */
export const EmptyCarousel: Story = {
  loaders: [
    async () => ({ carouselData: [] }), //simulate empty data
  ],
  render: (args, { loaded: { carouselData } }) => (
    <Carousel {...args} data={carouselData} />
  ),
};
