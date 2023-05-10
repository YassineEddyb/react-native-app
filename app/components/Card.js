import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image, style, imageStyle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, style]}>
        <Image style={[styles.image, imageStyle]} source={image} />
        <View style={styles.details}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 10,
  },
  title: {
    marginBottom: 3,
  },
  subTitle: {
    color: colors.secondary,
  },
});

export default Card;
