import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import firebase from "./Firebase";

const LoginScreen = () => {
  state = {
    email: "",
    pass: "",
    nov: 0,
    confpass: "",
    error1: "",
    error2: "",
  };

  nancy = async () => {
    await firebase.database().ref("").update({
      email: this.state.email,
      pass: this.state.pass,
    });
  };
  em = (asd) => {
    this.setState({ email: asd.target.value });
    setTimeout(async () => {
      if (!this.state.email.includes("gmail.com")) {
        await this.setState({ error1: "Please enter correct input" });
      }
      if (this.state.email.includes("gmail.com")) {
        this.setState({ error1: "" });
      }
    }, 3000);
  };

  password = (text) => {
    console.log("asdf");
    this.setState({ pass: text.target.value });
  };
  return (
    <View>
      <Text>hello</Text>
      <TextInput label="Email" mode="outlined" style={{}} onChange={this.em} />
      <TextInput label="Password" mode="outlined" onChange={this.password} />

      <Button mode="contained" onPress={this.nancy}>
        Loging
      </Button>
    </View>
  );
};

export default LoginScreen;
