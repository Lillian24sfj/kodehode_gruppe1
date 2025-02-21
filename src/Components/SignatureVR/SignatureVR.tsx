import React, { useState } from "react";
import './SignatureVR'; // Import the custom CSS

export interface SignatureVRProps {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: "small" | "medium" | "large";
}

export const SignatureVR: React.FC<SignatureVRProps> = ({
  header,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  size = "medium",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : isOpen;

  const toggleOpen = () => {
    if (onOpenChange) {
      onOpenChange(!open);
    }
    setIsOpen(!open);
  };

  return (
    <div className={`signature-vr signature-vr-${size}`}>
      <div className="signature-vr-header">
        <button onClick={toggleOpen}>
          {open ? "Show less" : "Read more"}
        </button>
        <h3>{header}</h3>
      </div>
      {open && (
        <div className="signature-vr-content">
          {children}
        </div>
      )}
    </div>
  );
};
