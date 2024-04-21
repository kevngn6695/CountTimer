import React from "react";

import Wrapper from "../components/Wrapper";

import "../assets/style/sass/components/textinput.sass";

function TextInput(props) {
  return (
    <form className={props.classNameForm}>
      {props.listTextInput.map((item) => (
        <Wrapper className={props.classNameWrapper}>
          <label
            className={`${props.classNameLabel} ${item.name}`}
            htmlFor={item.name}
            name={item.name}
          >
            {item.text}
          </label>
          <br />
          <input
            className={`${props.classNameInput} ${item.name}`}
            type={item.type}
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
            maxLength={item.maxLength}
            value={item.value}
            onChange={item.onChange}
          />
          <br />
        </Wrapper>
      ))}
    </form>
  );
}

export default React.memo(TextInput);
