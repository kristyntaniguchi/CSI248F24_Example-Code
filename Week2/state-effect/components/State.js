import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function State() {
  //useState() returns two things the value of the variable and a function to update
  //when you call useState you pass the initial value
  //this creates a variable counter = 0 and a function setCounter which updates counter
  const [counter, setCounter] = useState(0);
  //let counter = 0;
  const increment = () => {
    //you cannot just directly change a state variable
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState Hook</Text>
      <Text style={styles.explanation}>
        useState is a hook in React. Hooks are just methods that are provided to
        use from the React Library. useState is a function that returns two
        items. The first item is the value of the variable tracked by state. The
        second item is a function for updating that value. When we useState the
        UI will automatically update when state changes.
      </Text>
      <Text style={styles.count}>Count: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment}></Button>
        <Button title="Decrement" onPress={decrement}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "f0f0f0",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  explanation: {
    marginBottom: 15,
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
