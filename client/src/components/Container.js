import React, { useState } from "react";

import "../assets/style/sass/components/container.sass";

function Container(props) {
  return (
    <section className={props.className} {...props}>
      {props.children}
    </section>
  );
}

export default React.memo(Container);
