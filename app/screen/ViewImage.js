import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImage(props) {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="delete" color="white" size={30} />
      </View>
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
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  closeIcon: {
    position: "absolute",
    bottom: 20,
    left: 10,
  },
});

export default ViewImage;
