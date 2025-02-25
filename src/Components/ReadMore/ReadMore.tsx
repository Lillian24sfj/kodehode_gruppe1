import React, { useState } from "react";
import styles from "./ReadMore.module.css"; // Import the custom CSS

/**
 * This is the description of what properties
 * the ReadMore component accepts, and whether they are
 * required or optional.
 */
export interface ReadMoreProps {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: "small" | "medium" | "large";
}

/**
 * ReadMore component that displays a header, content that can be toggled,
 * and provides different sizes for display. The content can be toggled open or closed.
 */
export const ReadMore: React.FC<ReadMoreProps> = ({
  header,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  size = "medium",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : isOpen;

  /**
   * Toggle the open state of the ReadMore component.
   * Calls the onOpenChange prop if provided to notify of the state change.
   */
  const toggleOpen = () => {
    if (onOpenChange) {
      onOpenChange(!open);
    }
    setIsOpen(!open);
  };

  return (
    <div className={`${styles.readmore} ${styles[`readmore-${size}`]}`}>
      {" "}
      {/* Use styles as classes */}
      <div className={styles["readmore-header"]}>
        <button onClick={toggleOpen}>{open ? "Show less" : "Read more"}</button>
        <h3>{header}</h3>
      </div>
      {open && <div className={styles["readmore-content"]}>{children}</div>}
    </div>
  );
};
