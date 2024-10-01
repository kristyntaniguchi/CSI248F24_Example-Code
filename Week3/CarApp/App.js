import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // State to store the list of cars
  const [cars, setCars] = useState([
    { id: "1", make: "Toyota", model: "Corolla", year: 2022, price: 25000 },
    { id: "2", make: "Honda", model: "Civic", year: 2021, price: 23000 },
    { id: "3", make: "Ford", model: "Mustang", year: 2023, price: 35000 },
    { id: "4", make: "Chevrolet", model: "Camaro", year: 2022, price: 33000 },
    { id: "5", make: "Tesla", model: "Model 3", year: 2023, price: 45000 },
    { id: "6", make: "BMW", model: "3 Series", year: 2022, price: 40000 },
    {
      id: "7",
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2023,
      price: 42000,
    },
    { id: "8", make: "Audi", model: "A4", year: 2022, price: 39000 },
    { id: "9", make: "Volkswagen", model: "Golf", year: 2023, price: 28000 },
    { id: "10", make: "Hyundai", model: "Elantra", year: 2022, price: 22000 },
    { id: "11", make: "Kia", model: "Forte", year: 2023, price: 21000 },
    { id: "12", make: "Mazda", model: "CX-5", year: 2022, price: 30000 },
    { id: "13", make: "Subaru", model: "Outback", year: 2023, price: 32000 },
    { id: "14", make: "Lexus", model: "ES", year: 2022, price: 48000 },
    { id: "15", make: "Acura", model: "TLX", year: 2023, price: 43000 },
  ]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
