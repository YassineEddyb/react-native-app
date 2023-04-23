import React from "react";
import { Text, StyleSheet } from "react-native";

import { textStyles } from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[textStyles, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  // text: {
  //   color: colors.dark,
  //   fontFamily: Platform.OS === "android" ? "roboto" : "avenir",
  //   fontWeight: 500,
  // },
});

export default AppText;
