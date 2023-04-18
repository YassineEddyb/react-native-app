import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function DeleteItem({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.delete}>
        <MaterialCommunityIcons name="trash-can" size={30} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  delete: {
    backgroundColor: colors.primary,
    width: 80,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteItem;
