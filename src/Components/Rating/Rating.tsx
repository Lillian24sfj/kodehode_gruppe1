// @ts-expect-error modulecss
import style from "./Rating.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export function Rating() {
  const [ratings, setRatings] = useState<number>(0);

  return (
    <div className={style.rating_flex_container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={style.rating_star}
          fill={star <= ratings ? "#fadb14" : "#f0f0f0"}
          stroke="none"
          strokeWidth="15"
          onMouseEnter={() => setRatings(star)}
          onMouseLeave={() => setRatings(0)}
        />
      ))}
    </div> 
  );
}