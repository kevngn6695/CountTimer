import React from "react";

import "../assets/style/sass/components/wrapper.sass";

function Wrapper(props) {
  return (
    <div className={props.className} {...props}>
      {props.children}
    </div>
  );
}

export default React.memo(Wrapper);
