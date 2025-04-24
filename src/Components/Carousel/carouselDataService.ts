import { CarouselItem } from "./Carousel";

interface RawCarouselItem {
  id?: string;
  /**Supported types is image, or text, this is set in the data.json */
  type: "text" | "image";
  /** src and alt is manditory for images, caption is optional(delete the category from the json to hide) */
  src?: string;
  alt?: string;
  caption?: string;
  /** Title, and description is optional, content is manditory for text */
  title?: string;
  content?: string;
  description?: string;
}

interface RawCarouselData {
  slides: RawCarouselItem[];
}

export async function fetchCarouselData(): Promise<CarouselItem[]> {
  try {
    const response = await fetch("/src/Components/Carousel/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch carousel data");
    }
    const rawData: RawCarouselData = await response.json();
    if (!rawData.slides || !Array.isArray(rawData.slides)) {
      throw new Error("Failed to fetch carousel data");
    }

    return rawData.slides
      .map((item: RawCarouselItem) => {
        if (item.type === "text") {
          return {
            type: "text",
            title: item.title || "",
            content: item.content || "",
            description: item.description || "",
            id: item.id, // Add the id
          };
        } else if (item.type === "image") {
          return {
            type: "image",
            src: item.src || "",
            alt: item.alt || "",
            caption: item.caption || "",
            id: item.id, // Add the id
          };
        } else {
          console.warn("Unknown item type:", item);
          return null; // Or a default item
        }
      })
      .filter((item) => item !== null) as CarouselItem[]; // Filter out null items
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    return [];
  }
}
