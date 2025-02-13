// @ts-expect-error cssmodules
import style from "./SearchComponent.module.css";
import { CiSearch } from "react-icons/ci";

export function SearchComponent() {
  return (
    <div className={style.search_bar_flex_container}>
      <input className={style.search_input_field} type="text" />
      <div className={style.search_magnifying_icon}>
        <CiSearch />
      </div>
    </div>
  );
}
