import React from "react";

import "../assets/style/sass/pages/stopwatch.sass";

function Stopwatch(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Stopwatch);
