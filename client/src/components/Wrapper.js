import React from "react";

import { motion } from "framer-motion";

import { WrapperProps } from "../utils/type";

import "../assets/style/sass/components/wrapper.sass";

/**
 * Represents a wrapper component
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.children - The children element for the component.
 * @param {string} props.className - The class name of the wrapper element
 * @param {string} props.className - The class name of the wrapper element
 * @returns {React.ReactElement} A spiral progressive bar element.
 */
function Wrapper(props) {
  return (
    <motion.div
      {...props}
      className={props.className}
      drag={props.drag}
      dragConstraints={props.dragConstraints}
    >
      {props.children}
    </motion.div>
  );
}

Wrapper.propTypes = WrapperProps;

export default React.memo(Wrapper);
