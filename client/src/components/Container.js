import React from "react";

import "../assets/style/sass/components/container.sass";

function Container(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Container);
