import React from "react";

import { CardProps } from "../utils/type";

import { Text, View } from "react-native";

function Card(props) {
  return (
    <View className="card">
      <Text>{props.children}</Text>
    </View>
  );
}

Card.propTypes = CardProps;

export default React.memo(Card);
