// @ts-expect-error cssmodules
import style from "./SearchComponent.module.css";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search: React.FormEvent<HTMLFormElement>) => {
    search.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSearch} className={style.search_bar_flex_container}>
      <button className={style.search_magnifying_icon} type="submit">
        <IoSearch className={style.magnifying_icon} />
      </button>
      <input
        className={style.search_input_field}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(search) => setSearchTerm(search.target.value)}
      />
    </form>
  );
}
