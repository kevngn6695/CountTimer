import React from "react";

import Wrapper from "../components/Wrapper";

import "../assets/style/sass/components/textinput.sass";

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
