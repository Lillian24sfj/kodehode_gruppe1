// @ts-expect-error modulecss
import style from "./Rating.module.css";
import { FaStar } from "react-icons/fa";
import { useState, useRef } from "react";

export function Rating() {
  const [ratings, setRatings] = useState<number>(0);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const handleMouseEnter = (star: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); 
    timeoutRef.current = setTimeout(() => setRatings(star), 100); 
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      if (selectedRating === 0) {
        setRatings(0);
      }
    }
  };

  return (
    <div className={style.rating_flex_container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={style.rating_star}
          data-star={star}
          fill={star <= (ratings || selectedRating) ? "#fadb14" : "#f0f0f0"}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => setSelectedRating(star === selectedRating ? 0 : star)}
        />
      ))}
    </div>
  );
}




//! BROKEN MESS
 // const starRef = useRef<HTMLDivElement | null>(null);
  // // type is set to null before stars are selected
  // // then the type changes to div element when mounted
  // // set back to null when the div is unmounted

  // const handleClickInside = useCallback((event: MouseEvent) => {
  //   if (starRef.current && starRef.current.contains(event.target as Node)) {
  //     const clickedStar = Number((event.target as HTMLElement).getAttribute('data-star'));
  //     setSelectedRating(clickedStar === selectedRating ? 0 : clickedStar);
  //   }
  // }, [selectedRating])

  // const handleClickOuside = useCallback((event: MouseEvent) => {
  //   if (starRef.current && !starRef.current.contains(event.target as Node)) {
  //     if (selectedRating === 0) {
  //       setRatings(0);
  //     }
  //   }
  // }, [selectedRating])

  // useEffect(() => {
  //   document.addEventListener('click', handleClickInside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOuside);
  //   }

  //   }, [selectedRating, handleClickInside, handleClickOuside]);