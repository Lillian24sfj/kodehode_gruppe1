import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  textColor?: string;
  hoverEffect?: boolean,
  size?: "small" | "medium" | "large";
  // border?: number;
  // borderColor?: string;
}

export function Button({
  text = "Click me!",
  size = "medium",
  color = "#1e293b",
  textColor = "#f1f1f1",
  hoverEffect = true,
  onClick,
  // border = 0,
  // borderColor = "transparent",
}: ButtonProps) {
  const buttonClass = `${style.button_style} ${style[size]} ${hoverEffect ? style.hover : ""}`;
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: textColor,
        // border: `${border}px solid ${borderColor}`,
        
      }}
    >
      {text}
    </button>
  );
}
