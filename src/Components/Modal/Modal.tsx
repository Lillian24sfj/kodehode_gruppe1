import { useState } from "react";
// @ts-expect-error didn't work without it, fixed module.css issues
import style from "./Modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export interface ModalProperties {
    /**
     * The children property is a special React property
     * that allows the components to be used as a container
     * providing functionality and/or wrapping the content
     * into some defined HTML and Styling.
     */
    children: React.ReactNode;
  }
export function Modal( {children}: ModalProperties) {
    /**
     * The useState hook is used to create a state variable
     * called isOpen which is set to false by default.
     * The setIsOpen function is used to update the state
     * variable to true when the button is clicked.
     */
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.modal}>
            <button onClick={() => setIsOpen(true)} className={style.openButton}><BsThreeDots /></button>
            {isOpen && (
                <div className={style.modalContent}>
                    <button onClick={() => setIsOpen(false)} className={style.closeButton}><IoCloseSharp /></button>
                    {children}
                </div>
            )}
        </div>
    );
}