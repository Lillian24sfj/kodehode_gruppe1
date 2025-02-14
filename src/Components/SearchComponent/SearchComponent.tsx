// @ts-expect-error cssmodules
import style from "./SearchComponent.module.css";
import { IoSearch } from "react-icons/io5";

export function SearchComponent() {
  return (
    <div className={style.search_bar_flex_container}>
      <input className={style.search_input_field} type="text" />
      <button className={style.search_magnifying_icon}>
        <IoSearch className={style.magnifying_icon}/>
      </button>
    </div>
  );
}
