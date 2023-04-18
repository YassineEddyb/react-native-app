import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import DeleteItem from "../components/DeleteItem";

const testMessages = [
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
  const [messages, setMessages] = useState(testMessages);

  const handleDelte = (message) => {
    setMessages(messages.filter((mes) => mes.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <DeleteItem onPress={() => handleDelte(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        refreshing={true}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {},
});

export default Messages;
