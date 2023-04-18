import React from "react";

import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";

function Account(props) {
  return (
    <Screen style={styles.account}>
      <ListItem
        style={styles.profile}
        title="mosh hamadani"
        subTitle="example@gmail.com"
        image={require("../assets/mosh.jpg")}
      />

      <ListItem title="message" imageComponent={<Icon name="email" />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: colors.lightGrey,
  },
  profile: {
    marginBottom: 10,
  },
});

export default Account;
