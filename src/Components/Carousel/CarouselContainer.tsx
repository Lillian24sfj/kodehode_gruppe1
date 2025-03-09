import { useState, useEffect } from "react";
import { Carousel, CarouselItem } from "./Carousel";
import { fetchCarouselData } from "./carouselDataService";

export const CarouselContainer: React.FC = () => {
  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCarouselData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCarouselData();
        setCarouselData(data);
        setError(null);
      } catch (error) {
        setError("Failed to load carousel data");
      } finally {
        setIsLoading(false);
      }
    };

    loadCarouselData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Carousel
      data={carouselData}
      interval={5000}
      itemSize={{ width: "100%", height: "600px" }}
    />
  );
};
