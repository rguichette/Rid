// import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, 
  SafeAreaView ,Text, TextInput,
   StatusBar, Switch, Button,
  Image
  } from 'react-native';



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


import * as ImagePicker from 'expo-image-picker'
import {AppImage} from './app/components/AppImage';
import {ImageInput} from './app/components/ImageInput';
import { ImageInputList } from './app/components/ImageInputList';


const categories = [
  {label:"Furniture", value: 1},
  {label:"Clothing", value:2 },
  {label:"Cameras", value: 3}

]

export default function App() {

  const [imageUri, setImageUri] =  useState()
  const [imageUris, setImageUris] =  useState([])
  

  const requestPermission = async ()=>{

    const result =  await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if(!result.granted)
      alert("You need to enable permission to access the library.")
   }

   useEffect(async ()=>{
    requestPermission();
   }, [])

   const selectImage = async () =>{
     try {
      const result= await ImagePicker.launchImageLibraryAsync()
        if(!result.cancelled)
          setImageUri(result.uri)
          // setImageUris(imageUris =>{ 
            
          //  return  [...imageUris, result.uri]})
     } catch (error) {
       console.log("error reading an image")
     }
    
   }

  return (

   


     <Screen>
  <ImageInput selectImage={selectImage} imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/>

  </Screen>



    



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