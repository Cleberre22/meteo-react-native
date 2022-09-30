import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import DateTime from "./components/DateTime";
import WeatherScroll from "./components/WeatherScroll";


export default function App() {

const img = require('./assets/imageBg.jpg')

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
      <ImageBackground source={img} style={styles.imageBg}>
        <DateTime />
        <WeatherScroll />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageBg:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
  }
});
