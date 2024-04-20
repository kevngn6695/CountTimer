import React from "react";

import "../assets/style/sass/components/textinput.sass";

function TextInput(props) {
  return (
    <form className={props.classNameForm}>
      {props.listTextInput.map((item) => (
        <>
          <label htmlFor={item.name} name={item.name}>
            {item.text}
          </label>
          <br />
          <input
            type={item.type}
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
          />
          <br />
        </>
      ))}
    </form>
  );
}

export default React.memo(TextInput);
