import React, { useState, useRef, useEffect } from "react";

/**
 * Represents a pill-shaped progress bar
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
function Pill(props) {
  const [pathLength, setPathLength] = useState(0);
  const filledLength = (props.value / 100) * pathLength;
  const strokeDashoffsetValue = pathLength - filledLength;
  const progressRef = useRef();

  useEffect(() => {
    if (progressRef.current) {
      const length = progressRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);
  return (
    <>
      <div
      // style={{
      //   position: "absolute",
      //   width: "100%",
      //   height: "100%",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      >
        {props.children}
      </div>
      <svg width="auto" height="auto" viewBox="0 0 97 65">
        <rect
          className=""
          width="197.835606"
          height="47.835609"
          x="6.0821972"
          y="8.5821953"
          ry="24.086977"
          rx="23.917803"
          stroke={props.trackColor}
          strokeWidth={props.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          className="progress"
          ref={progressRef}
          width="197.835606"
          height="47.835609"
          x="6.0821972"
          y="8.5821953"
          ry="24.086977"
          rx="23.917803"
          fill="none"
          stroke={props.progressColor}
          strokeWidth={props.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffsetValue}
          style={{
            transition: `stroke-dashoffset ${props.transitionSpeed}s linear`,
          }}
        />
      </svg>
    </>
  );
}

export default React.memo(Pill);
