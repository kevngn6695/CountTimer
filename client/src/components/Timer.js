import React from "react";

import TextInput from "./TextInput";
import Button from "./Button";
import Wrapper from "./Wrapper";

import { generateListTextInput } from "../utils/init";

import "../assets/style/sass/components/timer.sass";
import ProgressBar from "./ProgressBar";

function Timer(props) {
  const listTextInput = [
    generateListTextInput(
      "hour",
      "text",
      "HH",
      "0",
      "2",
      props.hour,
      props.onChangeHour
    ),
    generateListTextInput(
      "minute",
      "text",
      "MM",
      "0",
      "2",
      props.minute,
      props.onChangeMinute
    ),
    generateListTextInput(
      "second",
      "text",
      "SS",
      "0",
      "2",
      props.second,
      props.onChangeSecond
    ),
    generateListTextInput(
      "milisecond",
      "text",
      "MS",
      "0",
      "2",
      props.milisecond,
      props.onChangeMilisecond
    ),
  ];

  return (
    <>
      <Wrapper>
        <TextInput
          classNameForm={props.classNameForm}
          classNameLabel={props.classNameLabel}
          classNameInput={props.classNameInput}
          classNameWrapper={props.classNameWrapper}
          listTextInput={listTextInput}
        />

        <ProgressBar
          shape="pill"
          value={50}
          strokeWidth={0.5}
          // trackColor={trackColor}
          progressColor="#000"
          transitionSpeed={0.5}
        />

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
    </>
  );
}

export default React.memo(Timer);
