import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";

export default function CarList({ cars }) {
  //return some UI for each item
  const renderItem = ({ item }) => (
    <Text>
      {item.make} {item.model}
    </Text>
  );
  //return a unique identifier
  const keyExtractor = (item) => item.id;
  //check to make sure cars passed
  console.log(cars);
  return (
    <FlatList data={cars} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
}

const styles = StyleSheet.create({});
