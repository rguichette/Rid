// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView ,Text, TextInput, StatusBar, Switch} from 'react-native';



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
import {Screen} from './app/screens/Screen';


import { Icon } from './app/components/Icon';
import {AppTextInput} from './app/components/AppTextInput';
import colors from './app/config/colors';
import { AppPicker } from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import {RegisterScreen} from './app/screens/RegisterScreen';
import { ListingEditScreen } from './app/screens/ListingEditScreen';



const categories = [
  {label:"Furniture", value: 1},
  {label:"Clothing", value:2 },
  {label:"Cameras", value: 3}

]

export default function App() {

  const [category, setCategory] =  useState()

  return (


      // {/* <ListItem image={require("./app/assets/logo-red.png")} 
      // title="Red"
      //  subtitle="hgsdfadfadfjakdfkla;dflk;;;jkl;allllldladfldsjfa;lkjfawefnvcdka;fdjs;ifjadnafk;afja;dsfjoewfijkdad;sdjf;afjofjda;dfja;dfjdlm;alad;afdfjaer;fjdmdjffaw jfjadsfawefij jda owjjfa;fajaf;v jfirfaj;" 
      // showChevrons
      // /> */}

      <ListingEditScreen/>


    



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