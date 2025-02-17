// @ts-expect-error modulecss
import style from "./Rating.module.css";
import { FaStar } from "react-icons/fa";

export function Rating() {
  return (
    <>
      <div className={style.rating_flex_container}>
        <FaStar id={style.rating_star} fill="none" stroke="black" strokeWidth="15"/>
        <FaStar id={style.rating_star} fill="none" stroke="black" strokeWidth="15"/>
        <FaStar id={style.rating_star} fill="none" stroke="black" strokeWidth="15"/>
        <FaStar id={style.rating_star} fill="none" stroke="black" strokeWidth="15"/>
        <FaStar id={style.rating_star} fill="none" stroke="black" strokeWidth="15"/>
      </div>
    </>
  );
}

