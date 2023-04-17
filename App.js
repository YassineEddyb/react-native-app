import { StyleSheet, Text, View, Button, Dimensions } from "react-native";

import Welcome from "./app/screen/Welcome";
import ViewImage from "./app/screen/ViewImage";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetails from "./app/screen/ListingDetails";

export default function App() {
  return <ListingDetails />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 50,
  },
});
