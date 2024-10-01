import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CarList({ cars }) {
  //check to make sure cars passed
  console.log(cars);
  return (
    <View>
      <Text>CarList</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
