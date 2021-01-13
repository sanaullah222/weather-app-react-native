import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({currentWeather, unitsSystem}) {
    const {
        main: {feels_like, humidity, pressure },
        wind: {speed},
    } = currentWeather

const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

    return (
        <View style = {styles.weatherDeatails}>
        <View style = {styles.weatherDeatailsRow}>
        <View style = {{...styles.weatherDeatailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
        <View style = {styles.weatherDeatailsRow}>
        <FontAwesome5 name='temperature-low' size={25} color={PRIMARY_COLOR} />
       <View style = {styles.weatherDeatailsItems}>
       <Text style={styles.textSecondary}>Feels Like </Text>
            <Text>{feels_like} °</Text>
       </View>
        
            </View>
            </View>
            <View style = {styles.weatherDeatailsBox}>
            <View style = {styles.weatherDeatailsRow}>
        <MaterialCommunityIcons name='water' size={30} color={PRIMARY_COLOR} />
       <View style = {styles.weatherDeatailsItems}>
       <Text style={styles.textSecondary}>Humidity </Text>
            <Text>{humidity} %</Text>
       </View>
        
            </View>
            </View>
            </View>
            <View style = {{...styles.weatherDeatailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
        <View style = {{...styles.weatherDeatailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
        <View style = {styles.weatherDeatailsRow}>
        <MaterialCommunityIcons name='weather-windy' size={25} color={PRIMARY_COLOR} />
       <View style = {styles.weatherDeatailsItems}>
       <Text style={styles.textSecondary}>Wind Speed </Text>
            <Text>{windSpeed}</Text>
       </View>
        
            </View>
            </View>
            <View style = {styles.weatherDeatailsBox}>
            <View style = {styles.weatherDeatailsRow}>
        <MaterialCommunityIcons name='speedometer' size={30} color={PRIMARY_COLOR} />
       <View style = {styles.weatherDeatailsItems}>
       <Text style={styles.textSecondary}>Pressure </Text>
            <Text>{pressure} hPa</Text>
       </View>
        
            </View>
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    weatherDeatails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDeatailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDeatailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDeatailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
})