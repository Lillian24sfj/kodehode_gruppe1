import { useState } from "react";
// @ts-expect-error didn't work without it, fixed module.css issues
import style from "./Modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


export function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.modal}>
            <button onClick={() => setIsOpen(true)} className={style.openButton}><BsThreeDots /></button>
            {isOpen && (
                <div className={style.modalContent}>
                    <button onClick={() => setIsOpen(false)} className={style.closeButton}><IoCloseSharp /></button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dicta aut cumque voluptatum debitis aliquid eum tenetur ab iure maxime asperiores, illum est libero nesciunt vel, quidem dolore molestias iusto.</p>
                </div>
            )}
        </div>
    );
}