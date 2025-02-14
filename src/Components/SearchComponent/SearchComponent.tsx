// @ts-expect-error modulecss
import style from "./SearchComponent.module.css";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion"

export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search: React.FormEvent<HTMLFormElement>) => {
    search.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  /*Animation with framer motion*/
  const iconAnimation = {
    hover: { scale: 1.2, rotate: 15 },
    tap: { scale: 0.9, rotate: -15 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <form onSubmit={handleSearch} className={style.search_bar_flex_container}>
      <motion.button className={style.search_magnifying_icon} type="submit">
        <motion.div whileHover="hover" whileTap="tap" variants={iconAnimation}>
          <IoSearch className={style.magnifying_icon} />
        </motion.div>
      </motion.button>
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
