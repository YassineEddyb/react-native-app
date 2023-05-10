import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
import ListringEdit from "./app/screen/ListringEdit";
import colors from "./app/config/colors";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 50,
  },
});
