import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
export default function GroceryList() {
  //make a grocery list and add it to state
  const [groceries, setGroceries] = useState(["Milk", "Eggs", "Bread"]);
  const [newItem, setNewItem] = useState("");
  function itemHandler() {
    //In order for state to work I have use use the setGroceries function if I
    //want to change groceries
    //you cannot just modify a variable tracked by state
    //groceries.push(newItem);
    //we want to create a new array with everything from groceries but add
    //newitem
    //... Spread operator = ALL OF THE ITEMS IN [] {}
    const newArray = [...groceries, newItem];
    console.log(newArray);
    setGroceries(newArray);
    //clear the newItem state after adding to array.
    setNewItem("");
  }
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
      {/* User input section */}
      <View>
        <Text>Enter an item to add to list</Text>
        <TextInput value={newItem} onChangeText={setNewItem}></TextInput>
        {/* Test the newItem state is working */}
        {/* <Text>{newItem}</Text> */}
        <Button onPress={itemHandler} title="Add"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
