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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNextClick = nextSlide;

  if (data.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div
      className={styles.carousel_container}
      style={itemSize}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.carousel_track}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${data.length * 100}%`,
        }}
      >
        {data.map((item, index) => (
          <div key={index} className={styles.carousel_item}>
            {item.type === "image" ? (
              <img
                src={item.content}
                alt={item.caption || ""}
                style={itemSize}
              />
            ) : (
              <div style={itemSize}>
                <h3>{item.content}</h3>
              </div>
            )}
            {item.caption && <p className={styles.caption}>{item.caption}</p>}
          </div>
        ))}
      </div>
      {data.length > 1 && (
        <>
          <button onClick={handlePrevClick} className={styles.prev_button}>
            ←
          </button>
          <button onClick={handleNextClick} className={styles.next_button}>
            →
          </button>
        </>
      )}
    </div>
  );
};
