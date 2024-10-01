import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CarListItem({ car }) {
  return (
    <View>
      <Text>{car.make}</Text>
      <Text>{car.model}</Text>
      <View>
        <Text>{car.year}</Text>
        <Text>{car.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
