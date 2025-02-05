import { useState } from "react";

/**
 * This is the description of what properties
 * the component accepts, and if they are
 * required or optional.
 */
export interface TestComponentProperties {
  /**
   * The children property is a special React property
   * that allows the components to be used as a container
   * providing functionality and/or wrapping the content
   * into some defined HTML and Styling.
   */
  children: React.ReactNode;
}

/**
 * An example component for testing purposes
 */
export function TestComponent({ children }: TestComponentProperties) {
  const [hidden, setHidden] = useState(false);

  const toggle = () => setHidden((previousValue) => !previousValue);

  return (
    <div className="px-2 py-1 bg-amber-400 shadow-2xl">
      <button onClick={toggle}>{hidden ? "Show" : "Hide"}</button>
      <div>
        {hidden ? (
          <>
            <p>"Now you don't"</p>
            <p>No children</p>
          </>
        ) : (
          <>
            <p>"Now you see them"</p>
            {children}
          </>
        )}
      </div>
    </div>
  );
}
