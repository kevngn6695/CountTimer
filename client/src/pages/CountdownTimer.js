import React, { useState, useEffect } from "react";

import Timer from "../components/Timer";
import Container from "../components/Container";

import "../assets/style/sass/components/timer.sass";

/**
 * Represents a text input
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.classNameForm - The class name of the form element.
 * @param {string} props.classNameWrapper - The class name of the wrapper element
 * @param {string} props.classNameLabel - The class name of the label for the text input element.
 * @param {string} props.classNameInput - The class name of the input element
 * @param {number} props.listTextInput - The list text input.
 * @returns {React.ReactElement} A spiral progressive bar element.
 */

function CountdownTimer(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  const handleOnChangeHour = (e) => {
    if (e.target.value >= 0 && e.target.value <= 24) setHour(e.target.value);
  };

  const handleOnChangeMinute = (e) => {
    if (e.target.value >= 0 && e.target.value <= 60) setMinute(e.target.value);
  };

  const handleOnChangeSecond = (e) => {
    if (e.target.value >= 0 && e.target.value <= 60) setSecond(e.target.value);
  };

  const handleOnChangeMilisecond = (e) => {
    if (e.target.value >= 0 && e.target.value <= 100)
      setMilisecond(e.target.value);
  };

  const handleClickStart = () => {
    if (hour !== 0 || minute !== 0 || second !== 0 || milisecond !== 0)
      setIsRunning(true);
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

  const handleTimerLogic = (hour, minute, second, milisecond) => {
    if (milisecond > 0) setMilisecond(milisecond > 100 ? 99 : milisecond - 1);
    else if (second > 0) {
      setSecond(second > 60 ? 59 : second - 1);
      setMilisecond(99);
    } else if (minute > 0) {
      setMinute(minute > 60 ? 59 : minute - 1);
      setSecond(59);
      setMilisecond(99);
    } else if (hour > 0) {
      setHour(hour > 24 ? 24 : hour - 1);
      setMinute(59);
      setSecond(59);
      setMilisecond(99);
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        handleTimerLogic(hour, minute, second, milisecond);
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
