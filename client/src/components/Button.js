import React from "react";

import "../assets/style/sass/components/button.sass";

/**
 * Represents a button
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.children - The class name of children elements.
 * @param {string} props.className - The class name of the button element.
 * @returns {React.ReactElement} A spiral progressive bar element.
 */

function Button(props) {
  return (
    <button className={props.className} {...props}>
      {props.children}
    </button>
  );
}

export default React.memo(Button);
