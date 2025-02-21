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
  const [isPaused, setIsPaused] = useState(false);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  //How long should each Item be viewed
  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(carouselInfiniteScroll, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, data.length, interval, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className={styles.carousel_container} style={itemSize}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
              <img
                src={item.content}
                alt={item.caption || ""}
                style={itemSize}
              />
            ) : (
              <div style={itemSize}>
                <h3 className={styles.h3}>{item.content}</h3>
              </div>
            )}
            {item.caption && <p className={styles.caption}>{item.caption}</p>}
          </div>
        ))}
      </div>
      <button onClick={handlePrevClick} className={styles.prev_button}>
        ←
      </button>
      <button onClick={handleNextClick} className={styles.next_button}>
        →
      </button>
    </div>
  );
};
