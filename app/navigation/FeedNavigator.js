import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Listings from "../screen/Listings";
import ListingDetails from "../screen/ListingDetails";

const Stack = createStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={Listings} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
