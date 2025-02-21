import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselItem } from "./Carousel";
import { CarouselContainer } from "./CarouselContainer";
import { fetchCarouselData } from "./carouselDataService";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    interval: { control: "number" },
    itemSize: { control: "object" },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const mockCarouselItems: CarouselItem[] = [
  {
    type: "text" as const,
    content: "First Card",
    caption: "Description for the first card",
  },
  {
    type: "text" as const,
    content: "Second Card",
    caption: "Description for the second card",
  },
  {
    type: "image" as const,
    content: "https://picsum.photos/id/1018/1000/600/",
    caption: "Sample Image 1",
  },
  {
    type: "image" as const,
    content: "https://picsum.photos/id/1015/1000/600/",
    caption: "Sample Image 2",
  },
];

export const Default: Story = {
  args: {
    data: mockCarouselItems,
    interval: 3000,
    itemSize: { width: "100%", height: "300px" },
  },
};

export const SlowerInterval: Story = {
  args: {
    ...Default.args,
    interval: 5000,
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    itemSize: { width: "500px", height: "200px" },
  },
};

export const WithDataFetching: Story = {
  loaders: [
    async () => ({
      carouselData: mockCarouselItems,
    }),
  ],
  render: (args, { loaded: { carouselData } }) => (
    <Carousel {...args} data={carouselData} />
  ),
};

export const EmptyCarousel: Story = {
  args: {
    data: [],
  },
};

export const SingleItem: Story = {
  args: {
    data: [mockCarouselItems[0]],
  },
};
