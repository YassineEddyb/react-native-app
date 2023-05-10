import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "../screen/Messages";
import Account from "../screen/Account";

const Stack = createStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
