import React from "react";

import TextInput from "./TextInput";
import Button from "./Button";
import Wrapper from "./Wrapper";
// import ProgressBar from "./ProgressBar";

import { generateListTextInput } from "../utils/init";
import { TimerProps } from "../utils/type";

import "../assets/style/sass/components/timer.sass";

function Timer(props) {
  const listTextInput = [
    generateListTextInput(
      "hour",
      "text",
      "HH",
      "0",
      "2",
      props.hour,
      props.onChangeHour,
    ),
    generateListTextInput(
      "minute",
      "text",
      "MM",
      "0",
      "2",
      props.minute,
      props.onChangeMinute,
    ),
    generateListTextInput(
      "second",
      "text",
      "SS",
      "0",
      "2",
      props.second,
      props.onChangeSecond,
    ),
    generateListTextInput(
      "milisecond",
      "text",
      "MS",
      "0",
      "2",
      props.milisecond,
      props.onChangeMilisecond,
    ),
  ];

  return (
    <Wrapper className="timer-wrapper">
      <TextInput
        classNameForm="timer-form"
        classNameLabel="timer-label"
        classNameInput="timer-input"
        classNameWrapper="timer-inner-wrapper"
        listTextInput={listTextInput}
      />

      {/* <ProgressBar
          shape={props.shape}
          value={props.percentage}
          strokeWidth={props.thickness}
          // trackColor={trackColor}
          progressColor="#000"
          transitionSpeed={0.5}
        /> */}
      <Wrapper className="timer-btn-wrapper">
        {!props.isRunning && (
          <Button className="timer-btn play" onClick={props.onClickStart}>
            Play
          </Button>
        )}
        {props.isRunning && (
          <Button className="timer-btn pause" onClick={props.onClickPause}>
            Pause
          </Button>
        )}
        <Button className="timer-btn stop" onClick={props.onClickReset}>
          Reset
        </Button>
      </Wrapper>
    </Wrapper>
  );
}

Timer.propTypes = TimerProps;

export default React.memo(Timer);
