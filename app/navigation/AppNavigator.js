import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListringEdit from "../screen/ListringEdit";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
// import styles from "../config/styles";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListringEdit}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ListingEdit")}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="plus"
                  size={30}
                  color={colors.white}
                />
              </View>
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
    backgroundColor: colors.primary,
    borderRadius: "50%",
    bottom: 20,
    borderWidth: 10,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppNavigator;
