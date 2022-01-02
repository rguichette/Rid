// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, SafeAreaView , Text} from 'react-native';



import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { WelcomeScreen } from './app/screens/WelcomeScreen';
import { ViewImageScreen } from './app/screens/ViewImageScreen';

import {AppBtn} from "./app/components/AppBtn"
import {Card} from "./app/components/Card"
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import { ListItem } from './app/components/ListItem';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import { Icon } from './app/components/Icon';

export default function App() {


  return (
    
  //  <MyAccountScreen/>
  // <MessagesScreen/>
  <ListingsScreen/>

    );
}



const styles = StyleSheet.create({
  // cardView:{
  //   backgroundColor: '#FFFFFF',
  //   height: 400,
  //   width:"100%"

  // },
  container:{
      backgroundColor:"#f8f4f4",
      alignContent:"center",
      justifyContent: "center",
      flex:1,
      alignItems: "center"

  }
})