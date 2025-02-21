// @ts-expect-error modulecss
import style from "./Rating.module.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  initialRating?: number; // Optional initial rating
  maxStars?: number; // Max stars 
  starSize?: number; // Star size
  hoverColor?: string; // Color for hover stars 
  inactiveColor?: string; // Color for inactive stars
}
// rating - gets the user input value

export function Rating({
  initialRating = 0,
  maxStars = 5,
  starSize = 20,
  hoverColor = "#fadb14",
  inactiveColor = "#f0f0f0",
}: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  return (
    <div className={style.rating_flex_container}>
      {[...Array(maxStars)].map((_stars, i) => {
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
              className={style.star}
              size={starSize}
              color={
                ratingValue <= (hover || rating) ? hoverColor : inactiveColor
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
