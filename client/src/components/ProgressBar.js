import React from "react";

import Pill from "./shapes/Pill";

import { ProgressBarProps } from "../utils/type";

import Wrapper from "./Wrapper";

/**
 * Represents a shape progress bar component
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.children - The children elements.
 * @param {string} props.trackColor - The color in hex for the upper rect element.
 * @param {number} props.progressColor - The color in hex for the lower rect element.
 * @param {number} props.strokeWidth - The thickness for the component.
 * @param {number} props.transitionSpeed - The transition speed for the component.
 * @returns {React.ReactElement} A pill-shape progress bar element.
 */
function ProgressBar(props) {
  const shapeComponent = {
    pill: Pill,
  };

  const ShapeComponent = shapeComponent[props.shape];

  if (!ShapeComponent) {
    throw new Error(`Unsupported shape: ${props.shape}`);
  }

  return (
    <Wrapper className={props.className}>
      <ShapeComponent
        value={props.value}
        strokeWidth={props.strokeWidth}
        trackColor={props.trackColor}
        progressColor={props.progressColor}
        transitionSpeed={props.transitionSpeed}
      >
        {props.children}
      </ShapeComponent>
    </Wrapper>
  );
}

ProgressBar.propTypes = ProgressBarProps;

export default React.memo(ProgressBar);
