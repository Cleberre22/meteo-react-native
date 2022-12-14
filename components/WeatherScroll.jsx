import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

import FutureForecast from './FutureForecast';

const WeatherScroll = () => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentTempEl/>
            <FutureForecast/>
        </ScrollView>
    );
};

const CurrentTempEl = () => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@4x.png'}

    return(
        <View style={styles.currentTempContainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Lundi</Text>
                <Text style={styles.temp}>Après-midi - 28°</Text>
                <Text style={styles.temp}>Matin - 18°</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.3,
        backgroundColor: '#18181bcc',
        padding: 30,

    },    
    image: {
        width: 150,
        height: 150,
    },
    currentTempContainer: {
        flexDirection: "row",
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 10,
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15,
    },
    temp: {
        fontSize: 16,
        color: "white",
        fontWeight: '100',
        textAlign: 'center',
    },
    otherContainer: {
        paddingRight: 15,
    }
})

export default WeatherScroll;