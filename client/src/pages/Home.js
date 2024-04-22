import React, { useState, useEffect, useRef } from "react";

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

  const [time, setTime] = useState(null); // Initialize the state for time

  const parentRef = useRef();

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
    <Container ref={parentRef}>
      <Wrapper
        className="countdown-clock-wrapper handle"
        drag
        dragContraints={parentRef}
      >
        <Heading className="countdown-clock-heading" h1>
          {time}
        </Heading>
      </Wrapper>
    </Container>
  );
}

export default React.memo(Home);
