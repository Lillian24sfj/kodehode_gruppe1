// @ts-expect-error modulecss
import style from "./Rating.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className={style.rating_flex_container}>
      {[...Array(5)].map((star, i) => {
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


//! OVERCOMPLICATED

// import { FaStar } from "react-icons/fa";
// import { useState, useRef } from "react";

// export function Rating() {
// const [ratings, setRatings] = useState<number>(0);
// const [selectedRating, setSelectedRating] = useState<number>(0);
// const timeoutRef = useRef<number | null>(null);

// const handleMouseEnter = (star: number) => {
//   if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   timeoutRef.current = setTimeout(() => setRatings(star), 100);
// };

// const handleMouseLeave = () => {
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//     if (selectedRating === 0) {
//       setRatings(0);
//     }
//   }
// };

// return (
//   <div className={style.rating_flex_container}>
//     {[1, 2, 3, 4, 5].map((star) => (
//       <FaStar
//         key={star}
//         className={style.rating_star}
//         data-star={star}
//         fill={star <= (ratings || selectedRating) ? "#fadb14" : "#f0f0f0"}
//         onMouseEnter={() => handleMouseEnter(star)}
//         onMouseLeave={handleMouseLeave}
//         onClick={() => setSelectedRating(star === selectedRating ? 0 : star)}
//       />
//     ))}
//   </div>
// );
// }
