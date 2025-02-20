import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";

interface CarouselProps {
  data?: string[];
  interval?: number;
}

export const Carousel = ({
  data = ["1", "2", "3", "4", "5", "6"],
  interval = 3000,
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
    <div className={styles.carousel_container}>
      {data.map((item, index) => (
        <div key={index} className={styles.carousel_item}>
          <h3 className={styles.h3}>{item}</h3>
        </div>
      ))}
    </div>
  );
};
