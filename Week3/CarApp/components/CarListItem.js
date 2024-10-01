import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CarListItem({ car }) {
  return (
    <View style={styles.container}>
      <Text style={styles.make}>{car.make}</Text>
      <Text style={styles.model}>{car.model}</Text>
      <View style={styles.details}>
        <Text style={styles.year}>{car.year}</Text>
        <Text style={styles.price}>{car.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  make: {},
  model: {},
  details: {},
  year: {},
  price: {},
});
