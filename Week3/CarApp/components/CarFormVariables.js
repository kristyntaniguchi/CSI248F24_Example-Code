import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

//We need a form a collection of (Text TextInputs)
//we need state variables for each set of Text / Text Input
export default function CarFormVariables(addCar) {
  //state variables. Any variable being shown to the user that can change needs to be added to state
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  //Object that stores user input errors.
  const [errors, setErrors] = useState({});

  // //Use one object to handle all of the data on the form
  // const [carData, setCarData] = useState({
  //   make: "",
  //   model: "",
  //   year: "",
  //   price: "",
  // });

  const handleSubmit = () => {
    console.log(
      `Make: ${make}, Model: ${model}, Year: ${year}, Price: ${price}`
    );

    //We need to create a new car
    const newCar = {
      make,
      model,
      year: parseInt(year, 10), //10 is the base we're parsing to
      price: parseFloat(price),
    };
    //Check if newCar worked
    console.log(newCar);

    //Check if the data is valid

    //If the data is valid, add the car
    addCar(newCar);
  };

  //Validate the data
  const validateData = () => {
    //Simple but clunk way to validate the data

    //Better way to validate the data
    let newErrors = {};
    //make.trim() removes any whitespace from the beginning and end of the string
    //Check if make is empty
    if (!make.trim()) {
      newErrors.make = "Make is required";
    } //End if(!make.trim())
    //Check if model is empty
    if (!model.trim()) {
      newErrors.model = "Model is required";
    } //End if(!model.trim())
    //Check if year is a number
    if (isNaN(parseInt(year, 10))) {
      newErrors.year = "Year must be a whole number";
    } //End if(isNaN(year))
    //Check if price is a number
    if (isNaN(parseFloat(price))) {
      newErrors.price = "Price must be a number";
    } //End if(isNaN(price))

    //Make sure we can get the errors
    console.log(newErrors);

    //Set errors to newErrors
    setErrors(newErrors);

    //Use Object.keys to get the keys of the object.  If there are no keys, there are no errors.
    return Object.keys(newErrors).length === 0;
  };

  return (
    //When you're making an input, you want to make a value for the state variable and
    <View>
      {/*A value is set to the state variable.  onChangeText is set to the function for updating the state*/}
      {/*MAKE*/}
      <TextInput
        value={make}
        onChangeText={setMake}
        placeholder="Make"
      ></TextInput>

      {/*MODEL*/}
      <TextInput
        value={model}
        onChangeText={setModel}
        placeholder="Model"
      ></TextInput>

      {/*YEAR*/}
      <TextInput
        value={year}
        onChangeText={setYear}
        placeholder="Year"
      ></TextInput>

      {/*PRICE*/}
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
      ></TextInput>

      {/*Button to submit the form.  handleSubmit doens't get () because it's not being called here, it's only being provided so it can be called later on*/}
      <Button onPress={handleSubmit} title="Add Car"></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
