import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";

import DateTime from "./components/DateTime";
import WeatherScroll from "./components/WeatherScroll";

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

const img = require('./assets/imageBg.jpg')

export default function App() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {

      let { latitude, longitude } = success.coords;
      fetchDataFromApi( latitude, longitude )
     
    }, (err) => {
      if(err){
        fetchDataFromApi("48.8563", "2.3487")
      }  
    })
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {

      console.log(data)
      setData(data)
      })
  }

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
  },
  imageBg:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
  }
});
