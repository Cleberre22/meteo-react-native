import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@react-native-material/core";
import { TextInput } from "@react-native-material/core";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>


export default function App() {

  const [meteo, setMeteo] = useState([]);
  useEffect(() => {
    getMeteo();
  }, []); // Sans les crochets ça tourne en boucle
  const getMeteo = async () => {
    await axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d98f2eb98f1877cd494f481c2c2ca502")
      .then((res) => {
        setMeteo(res.data);
     
      });
  };
  console.log(meteo.city);

  return (
    <View style={styles.container}>
      <Text>Hey mec, elle est ou ma caisse ,?</Text>
      <Text>Nom: {meteo.name}</Text>
      <TextInput id="name" variant="outlined" label="Label" style={{ margin: 16 }} />
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
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
