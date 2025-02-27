import {useState, useCallback } from "react";

export const GuidePanel = () => {
    const [message, setMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);


    const showMessage = useCallback((newMessage: string) => {
        setMessage(newMessage);
        setIsVisible(true);
    }, []);

    const hideMessage = useCallback(() => {
        setIsVisible(false);
    }, []);
    
    return { message, isVisible, showMessage, hideMessage };
    };