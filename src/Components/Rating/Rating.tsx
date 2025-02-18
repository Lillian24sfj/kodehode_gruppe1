// @ts-expect-error modulecss
import style from "./Rating.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className={style.rating_flex_container}>
      {[...Array(5)].map((_star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: "none" }} 
            />
            <FaStar
              className="star"
              size={20}
              color={ratingValue <= (hover || rating) ? "#fadb14" : "#f0f0f0"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}