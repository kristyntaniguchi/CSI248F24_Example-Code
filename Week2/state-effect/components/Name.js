import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function Name() {
  //state variables for first and last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const buttonHandler = () => {
    alert(`Hello ${firstName} ${lastName}`);
  };
  return (
    <View>
      <Text>Enter your first name</Text>
      <TextInput value={firstName} onChangeText={setFirstName}></TextInput>
      <Text>Enter your last name</Text>
      <TextInput value={lastName} onChangeText={setLastName}></TextInput>
      <Button onPress={buttonHandler} title="Show full name"></Button>
      <Text>
        Your full name is {firstName} {lastName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
