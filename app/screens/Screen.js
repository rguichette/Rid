import React from 'react'
// import Constants from 'expo-constants'
import {StyleSheet, SafeAreaView, Platform,StatusBar} from 'react-native' 


export function Screen({children, style}) { 
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
       
    )
}


const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1
    }
})