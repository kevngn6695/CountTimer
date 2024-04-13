import React, { useState, useEffect, useRef } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";

function Home() {
  const [time, setTime] = useState(null); // Initialize the state for time
  const [isResizable, setIsResizable] = useState(false); // State to track resizing
  const [dimension, setDimension] = useState({
    width: "40%",
    minHeight: "20vh",
  }); // Initial dimensions
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Initialize the mouse position
  const containerRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const updateDimensions = () => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimension({ width, height });
    }
  };
  const onMouseDown = (event) => {
    setIsResizable(true);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const onMouseUp = () => {
    setIsResizable(false);
  };
  const onMouseMove = (event) => {
    if (isResizable && containerRef.current) {
      const deltaX = event.clientX - mousePosition.x;
      const deltaY = event.clientY - mousePosition.y;

      setDimension((prevDimensions) => ({
        width: prevDimensions.width + deltaX,
        height: prevDimensions.height + deltaY,
      }));

      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString([], options);
      setTime(newTime);
    }, 100);

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    if (isResizable) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
      window.removeEventListener("resize", updateDimensions); // Cleanup event listener
    };
  }, [options, isResizable]); // Empty dependency array ensures the effect runs only once

  return (
    <Container
      ref={containerRef}
      className="countdown-clock-container"
      style={{ width: dimension.width, height: dimension.height }}
      onMouseDown={onMouseDown}
    >
      <Heading className="countdown-clock-heading" h1>
        {time}
      </Heading>
    </Container>
  );
}

export default React.memo(Home);
