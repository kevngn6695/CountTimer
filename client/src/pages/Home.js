import React, { useState, useEffect } from "react";

import Heading from "../components/Heading";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";

function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const [x, setX] = useState("50%");
  const [y, setY] = useState("50%");
  const [time, setTime] = useState(null); // Initialize the state for time

  const handleDragStart = (e) => {
    console.log("Start");
  };

  const handleDrag = (e) => {
    console.log("Dragging...");
  };

  const handleDragEnd = (e) => {
    console.log("End");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString([], options);
      setTime(newTime);
    }, 100);

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [options]); // Empty dependency array ensures the effect runs only once

  return (
    <Container>
      <Wrapper
        draggable
        className="countdown-clock-wrapper handle"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <Heading className="countdown-clock-heading" h1>
          {time}
        </Heading>
      </Wrapper>
    </Container>
  );
}

export default React.memo(Home);
