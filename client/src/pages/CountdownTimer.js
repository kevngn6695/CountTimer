import React, { useState, useEffect } from "react";

import Timer from "../components/Timer";
import Container from "../components/Container";

import "../assets/style/sass/components/timer.sass";

function CountdownTimer(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  const handleOnChangeHour = (e) => {
    setHour(e.target.value);
  };
  const handleOnChangeMinute = (e) => {
    setMinute(e.target.value);
  };
  const handleOnChangeSecond = (e) => {
    setSecond(e.target.value);
  };
  const handleOnChangeMilisecond = (e) => {
    setMilisecond(e.target.value);
  };

  const handleClickStart = () => {
    if (hour !== 0 || minute !== 0 || second !== 0 || milisecond !== 0) {
      setIsRunning(true);
    }
  };
  const handleClickReset = () => {
    setIsRunning(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMilisecond(0);
  };
  const handleClickPause = () => {
    setIsRunning(!isRunning);
  };

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
  }, [milisecond, second, minute, hour, isRunning]);

  return (
    <Container className={props.className}>
      <Timer
        milisecond={milisecond}
        second={second}
        minute={minute}
        hour={hour}
        shape="pill"
        percentage={100}
        thickness={1}
        isRunning={isRunning}
        onClickReset={handleClickReset}
        onClickStart={handleClickStart}
        onClickPause={handleClickPause}
        onChangeHour={handleOnChangeHour}
        onChangeMinute={handleOnChangeMinute}
        onChangeSecond={handleOnChangeSecond}
        onChangeMilisecond={handleOnChangeMilisecond}
      />
    </Container>
  );
}

export default React.memo(CountdownTimer);
