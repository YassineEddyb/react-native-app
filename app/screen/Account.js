import React from "react";

import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Separator from "../components/Separator";
import { View } from "react-native-web";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Listings",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function Account({ navigation }) {
  return (
    <Screen style={styles.account}>
      <ListItem
        style={styles.profile}
        title="mosh hamadani"
        subTitle="example@gmail.com"
        image={require("../assets/mosh.jpg")}
      />

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              imageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="logout"
        imageComponent={<Icon name="logout" backgroundColor={colors.black} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: colors.lightGrey,
  },
  profile: {
    marginBottom: 30,
  },
  container: {
    marginBottom: 10,
  },
});

export default Account;
