import { CarouselItem } from "./Carousel";

interface RawCarouselItem {
  id: string;
  title: string;
  description: string;
}

interface RawCarouselData {
  items: RawCarouselItem[];
}

export async function fetchCarouselData(): Promise<CarouselItem[]> {
  try {
    const response = await fetch("/src/Components/Carousel/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch carousel data");
    }
    const rawData: RawCarouselData = await response.json();
    return rawData.items.map((item) => ({
      type: "text",
      content: item.title,
      caption: item.description,
    }));
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    return [];
  }
}
