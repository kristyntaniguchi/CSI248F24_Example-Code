import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import CarListItem from "./CarListItem";

export default function CarList({ cars }) {
  //return some UI for each item
  const renderItem = ({ item }) => <CarListItem car={item} />;
  //return a unique identifier
  const keyExtractor = (item) => item.id;
  //check to make sure cars passed
  console.log(cars);
  return (
    <FlatList data={cars} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
}

const styles = StyleSheet.create({});
