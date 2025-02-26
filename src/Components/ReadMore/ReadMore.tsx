import { useState } from "react"; // Import useState from React
import styles from "./ReadMore.module.css"; // Import the custom CSS

/**
 * The properties that the ReadMore component accepts.
 * - header: A React node that serves as the header of the component.
 * - children: The content to be shown or hidden when toggled.
 */
export interface ReadMoreProps {
  /**
   * The header for the ReadMore component.
   * This is usually the title or label for the content being toggled.
   */
  header: React.ReactNode;

  /**
   * The content that can be toggled open or closed.
   * This content is displayed when the component is in an open state.
   */
  children: React.ReactNode;
}

/**
 * The ReadMore component displays a header and toggleable content.
 * The content can be shown or hidden based on user interaction.
 */
export function ReadMore({ header, children }: ReadMoreProps) {
  const [isOpen, setIsOpen] = useState(false); // Default to closed state

  /**
   * Toggles the open/closed state of the component.
   * This changes the visibility of the content.
   */
  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState); // Toggle state between true and false
  };

  return (
    <div className={styles.readmore}>
      <div className={styles["readmore-header"]}>
        <button onClick={toggleOpen}>
          {isOpen ? "Show less" : "Read more"} {/* Toggle button text */}
        </button>
        <h3>{header}</h3> {/* Header text */}
      </div>
      {isOpen && (
        <div className={styles["readmore-content"]}>
          {children} {/* Content that will be displayed when open */}
        </div>
      )}
    </div>
  );
}
