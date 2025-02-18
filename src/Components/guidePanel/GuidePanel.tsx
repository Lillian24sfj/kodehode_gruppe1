import React from "react";
import { RxAvatar } from "react-icons/rx";
import styles from "./GuidePanel.module.css"

interface GuidePanelProps {
  message: string;
  isVisible: boolean;
}

export const GuidePanel: React.FC<GuidePanelProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.panelContainer}>
      <RxAvatar className={styles.RxAvatar}/>
      <p className={styles.panelText}>{message}</p>
    </div>
  );
};
