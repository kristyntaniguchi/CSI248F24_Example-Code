import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

//We need a form a collection of (Text TextInputs)
//we need state variables for each set of Text / Text Input
export default function CarFormVariables() {
  //state variables
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  return (
    <View>
      <TextInput placeholder="Make"></TextInput>
      <TextInput placeholder="Model"></TextInput>
      <TextInput placeholder="Year"></TextInput>
      <TextInput placeholder="Price"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({});
