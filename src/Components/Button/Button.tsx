import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color: "primary" | "secondary" | "tertiary";
  padding?: number;
  size: number;
  disabled: boolean;
}

export function Button({
  text,
  onClick,
}: ButtonProps) {
  return (
    <button className={style.button_style} onClick={onClick}>
      {text}
    </button>
  );
}
