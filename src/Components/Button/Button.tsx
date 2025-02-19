import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled: boolean;
}

export function Button({
  text,
  onClick,
  size = "medium",
  color = 'primary',
  disabled = false,

  
}: ButtonProps) {
  const buttonClass = `${style.button} ${style[size]} ${style[color]} ${style[disabled ? style.disabled : '']}`
  return (
    <button  className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
