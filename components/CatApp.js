import React, { useContext } from "react";
import { View, Text } from "react-native";
import MyContext from "../MyContext";

export default function CatApp() {
  return (
    <View>
      <Text>{useContext(MyContext)}</Text>
    </View>
  );
}