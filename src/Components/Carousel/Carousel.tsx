import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";

export interface CarouselItem {
  type: "image" | "text";
  content: string;
  caption?: string;
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    if (!isPaused && data.length > 1) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [isPaused, data.length, interval]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleNextClick = nextSlide;

  if (data.length === 0) {
    return <div>No items to display</div>;
  }

  console.log("Current item:", data[currentIndex]);

  return (
    <div
      className={styles.carousel_container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.carousel_track} style={itemSize}>
        {data[currentIndex].type === "image" ? (
          <>
            <img
              src={data[currentIndex].src}
              alt={data[currentIndex].alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {data[currentIndex].caption && (
              <div className={styles.caption}>{data[currentIndex].caption}</div>
            )}
          </>
        ) : (
          <>
            {data[currentIndex].title && <h3>{data[currentIndex].title}</h3>}
            <p>
              {data[currentIndex].description || data[currentIndex].content}
            </p>
          </>
        )}
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
