import React from "react";

import "../assets/style/sass/components/button.sass";

function Button(props) {
  return (
    <button className={props.className} {...props}>
      {props.children}
    </button>
  );
}

export default React.memo(Button);
