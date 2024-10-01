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
  container: {
    backgroundColor: "lightgray",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  make: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  model: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  year: {
    fontSize: 14,
    color: "blue",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
});
