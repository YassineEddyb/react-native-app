import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screen/Welcome";
import Login from "../screen/Login";

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="r" component={Welcome} /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
