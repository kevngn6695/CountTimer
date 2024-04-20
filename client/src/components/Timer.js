import React from "react";

import TextInput from "./TextInput";

import { generateListTextInput } from "../utils/init";

function Timer(props) {
  const listTextInput = [
    generateListTextInput("hour", "text", "hh", "0"),
    generateListTextInput("minute", "text", "mm", "0"),
    generateListTextInput("second", "text", "ss", "0"),
    generateListTextInput("milisecond", "text", "mil", "0"),
  ];
  return (
    <div>
      {/* <button></button> */}
      <TextInput classNameForm="timer-form" listTextInput={listTextInput} />
    </div>
  );
}

export default React.memo(Timer);
