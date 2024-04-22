import React from "react";

import { motion } from "framer-motion";

import "../assets/style/sass/components/wrapper.sass";

function Wrapper(props) {
  return (
    <motion.div
      className={props.className}
      drag={props.drag}
      dragConstraints={props.dragConstraints}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}

export default React.memo(Wrapper);
