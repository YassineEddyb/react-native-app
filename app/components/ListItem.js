import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";

function ListItem({
  image,
  imageComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable friction renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={[styles.container, style]}>
          {imageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.details}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    textTransform: "capitalize",
  },
  subTitle: {
    color: colors.grey,
  },
});

export default ListItem;
