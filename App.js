import React, { useState } from "react";
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
import Listings from "./app/screen/Listings";
import AppInput from "./app/components/AppInput";
import AppPicker from "./app/components/AppPicker";
import Login from "./app/screen/Login";

const categories = [
  { label: "Forniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 50,
  },
});
