import React from 'react'
// import Constants from 'expo-constants'
import {StyleSheet, SafeAreaView, Platform,StatusBar, View} from 'react-native' 


export function Screen({children, style}) { 
    return (
        <SafeAreaView style={[styles.screen, style]}>
              <View style={style}>
            {children}
          </View>
            </SafeAreaView>
       
    )
    
}


const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1
    }
})