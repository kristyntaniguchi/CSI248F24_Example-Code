import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Title from "./components/Title";

export default function App() {
  return (
    // View = Div in React Native
    <View style={styles.container}>
      <Title></Title>
    </View>
  );
}
//In React Native we style with a stylesheet object
const styles = StyleSheet.create({
  container: {
    // flex : 1 makes this component expand to ALL available space
    flex: 1,
    backgroundColor: "#f0f0f0",
    //center item ver and hor
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
