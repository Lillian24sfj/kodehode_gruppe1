export function SignatureSondreA24() 


import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const SignatureSondreA24 = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  );
};

export default SignatureSondreA24;
