import React from "react";

import TextInput from "./TextInput";
// import Container from "./Container";

import { generateListTextInput } from "../utils/init";
import Wrapper from "./Wrapper";

function Timer(props) {
  const listTextInput = [
    generateListTextInput("hour", "text", "HH", "0", "2"),
    generateListTextInput("minute", "text", "MM", "0", "2"),
    generateListTextInput("second", "text", "SS", "0", "2"),
    generateListTextInput("milisecond", "text", "MS", "0", "2"),
  ];
  return (
    <>
      {/* <button></button> */}

      <TextInput
        classNameForm={props.classNameForm}
        classNameLabel={props.classNameLabel}
        classNameInput={props.classNameInput}
        classNameWrapper={props.classNameWrapper}
        listTextInput={listTextInput}
      />
    </>
  );
}

export default React.memo(Timer);
