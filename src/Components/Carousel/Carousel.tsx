import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import imageData from "./src/Components/Carousel/data.json";

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
  const { images } = imageData;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleNextClick = nextSlide;

  if (data.length === 0) {
    return <div>No items to display</div>;
  }

  console.log("Carousel data:", data);

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
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className={styles.carousel_item}>
              {item.type === "image" ? (
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  style={itemSize}
                />
              ) : (
                <div style={itemSize}>
                  <h3>{item.content}</h3>
                  {item.caption && (
                    <p className={styles.caption}>{item.caption}</p>
                  )}
                </div>
              )}
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
