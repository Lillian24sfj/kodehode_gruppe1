import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";

export interface CarouselItem {
  type: "image" | "text";
  content: string;
  caption?: string;
}

interface CarouselProps {
  data?: CarouselItem[];
  interval?: number;
  itemSize?: { width: string; height: string };
}

export const Carousel = ({
  data = [],
  interval = 3000,
  itemSize = { width: "100%", height: "300px" },
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  //How long should each Item be viewed
  useEffect(() => {
    const intervalId = setInterval(carouselInfiniteScroll, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, data.length, interval]);

  return (
    <div className={styles.carousel_container} style={itemSize}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.carousel_item}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {item.type === "image" ? (
            <img src={item.content} alt={item.caption || ""} style={itemSize} />
          ) : (
            <div style={itemSize}>
              <h3 className={styles.h3}>{item.content}</h3>
            </div>
          )}
          {item.caption && <p className={styles.caption}>{item.caption}</p>}
        </div>
      ))}
    </div>
  );
};
