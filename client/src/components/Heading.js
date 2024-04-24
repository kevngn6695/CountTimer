import React from "react";

import { HeadingProps } from "../utils/type";
import { motion } from "framer-motion";
import "../assets/style/sass/components/heading.sass";

function Heading(props) {
  // Destructuring props to access className, children, and heading level props.
  const { className, children, h1, h2, h3, h4, h5, h6 } = props;

  // Creating an object with heading level props.
  const headingLevels = { h1, h2, h3, h4, h5, h6 };

  // Finding the first truthy heading level prop.
  const level = Object.keys(headingLevels).find((key) => headingLevels[key]);

  // Rendering the appropriate heading element with className and children props.
  if (level) {
    return React.createElement(
      motion[level],
      { className, ...props },
      children
    );
  }

  // Returning null if no heading level prop is provided.
  return null;
}

Heading.propTypes = HeadingProps;

export default React.memo(Heading);
