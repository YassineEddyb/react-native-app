import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function User({ image, title, subTitle }) {
  return (
    <View style={styles.owner}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  owner: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginRight: 10,
  },
  title: {
    textTransform: "capitalize",
  },
  subTitle: {
    color: colors.grey,
  },
});

export default User;
