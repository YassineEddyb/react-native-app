import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.slogan}>Every Thing you done with it</Text>
      </View>

      <View style={styles.btnContainer}>
        <AppButton onPress={() => navigation.navigate("Login")}>
          Login
        </AppButton>
        <AppButton color="secondary">Register</AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    flex: 1,
    alignItems: "center",
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btnContainer: {
    width: "100%",
    gap: 20,
  },
});

export default Welcome;
