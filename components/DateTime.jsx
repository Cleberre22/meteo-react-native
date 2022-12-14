import React, {useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];

const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemValue}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = () => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const minutes = time.getMinutes();
             
            setTime((hour) + ':' + (minutes < 10? '0'+minutes: minutes)) 
           
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
            <WeatherItem title="Humidité" value="79" unit="%"/>    
            <WeatherItem title="Pression" value="1000" unit="hp"/>  
            <WeatherItem title="Sunrise" value="06:34"/>  
            <WeatherItem title="Sunset" value="20:43"/>  
            </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timeZone}>Fruree, greheertze</Text>
        <Text style={styles.latLong}>4.22N 50E</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    heading: {
        fontSize: 45,
        color: 'white',
        marginTop: 25,
        // marginLeft: 5,
        fontWeight: '100',
    },
    subHeading: {
        fontSize: 25,
        color: '#eee',
        fontWeight: '300',
        // marginLeft: 5,
    },
    rightAlign: {
        textAlign: 'right',
        marginTop: 35,
        // marginRight: 5,
    },
    timeZone: {
        fontSize: 15,
        color: 'white',
    },
    latLong: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700',
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        borderColor: "#eee",
        borderWidth: 1,
        // marginLeft: 5,
        padding: 10,
        marginTop: 10,
    },
    weatherItem: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    weatherItemTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '100',
    },
    weatherItemValue: {
        color: 'white',
        fontSize: 14,
        fontWeight: '100',
    }
})

export default DateTime;
