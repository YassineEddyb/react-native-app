import { StyleSheet, Text, View, Button, Dimensions } from "react-native";

import Welcome from "./app/screen/Welcome";
import ViewImage from "./app/screen/ViewImage";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetails from "./app/screen/ListingDetails";
import Messages from "./app/screen/Messages";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import User from "./app/components/ListItem";
import Account from "./app/screen/Account";

export default function App() {
  return <Account />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 50,
  },
});
