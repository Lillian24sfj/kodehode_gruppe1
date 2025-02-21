import { CarouselItem } from "./Carousel";

export async function fetchCarouselData(): Promise<CarouselItem[]> {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch carousel data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    return [];
  }
}
