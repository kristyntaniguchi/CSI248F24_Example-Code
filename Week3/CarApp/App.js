import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//you have to import useState before you can use it
import { useState } from "react";
import CarList from "./components/CarList";
import CarFormVariables from "./components/CarFormVariables";

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

  //Function to add a new car
  const addCar = (newCar) => {
    console.log("From App.js");
    //Make sure it's getting to the right spot with console.log()
    console.log(newCar);

    //setState gives you the value of the variable and the function to update it
    //We cannot change state variables directly, we have to use setCars
    //I need to pass in a new array containing everything from the previous array, plus the new car
    //[...cars, newCar] is the array with all the cars and the new car

    //We don't have a db to set the id, so we need to manually add it
    //newCar.id = (cars.length + 1).toString();
    //let newArray = [...cars, newCar];
    //setCars(newArray);
    //Can also do setCars([...cars, newCar]);

    //Make a new array called currentCars, fill it with the old array, and add the new car to it. it will also set the id property
    setCars((currentCars) => [
      ...currentCars,
      { ...newCar, id: (cars.length + 1).toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* TO use this (11:36 am 10/3 lecture) */}
      <CarFormVariables addCar={addCar}></CarFormVariables>
      <CarList cars={cars} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
