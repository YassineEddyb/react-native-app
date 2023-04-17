import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: Platform.OS === "android" ? "roboto" : "avenir",
    fontWeight: 500,
  },
});

export default AppText;
