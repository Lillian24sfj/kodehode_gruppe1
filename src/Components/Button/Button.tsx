import style from "./Button.module.css"

interface ButtonProps {
    text: string,
    onClick: () => void,
    color: 'primary' | 'secondary' | 'tertiary',
    size: number,
    disabled: boolean,
}

export function Button() {

}