import React from "react";

import { ContainerProps } from "../utils/type";

import "../assets/style/sass/components/container.sass";

/**
 * Represents a shape progress bar component
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.children - The children elements.
 * @param {string} props.className - The class name of the component.
 * @returns {React.ReactElement} A pill-shape progress bar element.
 */
function Container(props) {
  return (
    <section className={props.className} {...props}>
      {props.children}
    </section>
  );
}

Container.propTypes = ContainerProps;

export default React.memo(Container);
