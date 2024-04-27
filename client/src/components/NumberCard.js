import React from "react";

import { NumberCardProps } from "../utils/type";

function NumberCard(props) {
  return <div>NumberCard</div>;
}

NumberCard.propTypes = NumberCardProps;

export default React.memo(NumberCard);
