import React from "react";
import { RxAvatar } from "react-icons/rx";

interface GuidePanelProps {
  message: string;
  isVisible: boolean;
}

export const GuidePanel: React.FC<GuidePanelProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="panelContainer">
      <RxAvatar />
      <p className="panelText">{message}</p>
    </div>
  );
};
