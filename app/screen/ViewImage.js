import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImage(props) {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.deleteIcon}></View>
      <View style={styles.closeIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.primary,
    top: 0,
    left: 30,
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.secondary,
    top: 0,
    right: 30,
  },
});

export default ViewImage;
