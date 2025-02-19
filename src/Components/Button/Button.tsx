import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  textColor?: string;
  hoverEffect?: boolean,
  size?: "small" | "medium" | "large";
}

export function Button({
  text = "Click me!",
  size = "medium",
  color = "#1e293b",
  textColor = "#f1f1f1",
  hoverEffect = true,
  onClick,
}: ButtonProps) {
  const buttonClass = `${style.button_style} ${style[size]} ${hoverEffect ? style.hover : ""}`;
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
}
