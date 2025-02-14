import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const SignatureSondreA24 = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        border: "none",
        padding: "10px 20px",
        fontSize: "1.3rem",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};


