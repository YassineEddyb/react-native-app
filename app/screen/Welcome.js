import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text } from 'react-native';

import colors from "../config/colors"

function Welcome(props) {
  return (
    <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image 
            style={styles.logo} 
            source={require("../assets/logo-red.png")} />
        <Text> Every Thing you done with it </Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    flex: 1,
    alignItems: "center",
    fontWeight: "bold"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginButton : {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
  },
  registerButton : {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
})

export default Welcome; 