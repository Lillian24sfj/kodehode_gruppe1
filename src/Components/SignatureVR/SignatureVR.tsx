import React, { useState } from "react";

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
    <div
      className={`signature-vr signature-vr-${size} bg-white rounded-lg shadow-md p-4`}
    >
      <div className="signature-vr-header flex justify-between items-center">
        <button
          onClick={toggleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          {open ? "Show less" : "Read more"}
        </button>
        <h3 className="text-lg font-semibold">{header}</h3>
      </div>
      {open && (
        <div className="signature-vr-content mt-4 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};
