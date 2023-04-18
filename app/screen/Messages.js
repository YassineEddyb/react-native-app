import React from "react";
import { FlatList, StyleSheet } from "react-native";

import User from "../components/User";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "title 1",
    description: "desc 1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "title 2",
    description: "desc 2",
    image: require("../assets/mosh.jpg"),
  },
];

function Messages(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <User
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default Messages;
