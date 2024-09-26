import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
export default function GroceryList() {
  //make a grocery list and add it to state
  const [groceries, setGroceries] = useState(["Milk", "Eggs", "Bread"]);
  function renderGrocery({ item, index }) {
    //return some UI for each item
    console.log(item);
    return (
      <View>
        <Text>
          {item} {index}
        </Text>
      </View>
    );
  }
  return (
    <View>
      <Text>GroceryList</Text>
      {/* FlatList, takes the data as a prop 
      renderItem prop which we pass a function that returns UI foreach element in the array.
      keyExtractor takes a unique identifier for each item in the array */}
      <FlatList
        data={groceries}
        renderItem={renderGrocery}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
