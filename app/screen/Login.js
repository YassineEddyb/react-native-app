import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import FormInput from "../components/FormInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function Login(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormInput
              name="email"
              icon="email"
              placeholder="email"
              textContentType="email"
            />
            <FormInput
              name="password"
              icon="lock"
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />

            <AppButton style={styles.button} onPress={handleSubmit}>
              login
            </AppButton>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  button: {
    marginTop: 15,
  },
});

export default Login;
