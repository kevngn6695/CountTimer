import React, { useState, useEffect } from "react";

import "../assets/style/sass/components/timer.sass";
import Timer from "../components/Timer";

function CountdownTimer(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (milisecond > 0) {
          setMilisecond((milisecond) => milisecond - 1);
        } else if (second > 0) {
          setSecond((second) => second - 1);
          setMilisecond(99);
        } else if (minute > 0) {
          setMinute((minute) => minute - 1);
          setSecond(59);
          setMilisecond(99);
        } else if (hour > 0) {
          setHour((hour) => hour - 1);
          setMinute(59);
          setSecond(59);
          setMilisecond(99);
        }
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [milisecond, second, minute, hour]);

  return (
    <div className={props.className}>
      <Timer className="timer-form" />
    </div>
  );
}

export default React.memo(CountdownTimer);
