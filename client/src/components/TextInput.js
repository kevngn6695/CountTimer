import React from "react";

function TextInput(props) {
  return (
    <form className={props.className}>
      <label></label>
      <input type="text" id="fname" name="fname" />
    </form>
  );
}

export default React.memo(TextInput);
