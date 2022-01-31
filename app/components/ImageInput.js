//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';


import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native';


// create a component
export const ImageInput = ({imageUri, onChangeImage}) => {
    useEffect(()=>{requestPermission()}, [])

    const requestPermission = async ()=>{

        const result =  await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if(!result.granted)
          alert("You need to enable permission to access the library.")
       }


    const handlePress =() =>{
        if(!imageUri) selectImage()
        else Alert.alert("Delete", "Are you sure you want to delete this image?", [
            {text:"yes", onPress:()=>onChangeImage(null)},
            {text:"No" }
        
        ])
    }

    const selectImage = async () =>{
        try {
         const result= await ImagePicker.launchImageLibraryAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.Images,
             quality: 0.5
        
        });
           if(!result.cancelled)
             onChangeImage(result.uri)
             // setImageUris(imageUris =>{ 
               
             //  return  [...imageUris, result.uri]})
        } catch (error) {
          console.log("error reading an image")
        }
       
      }

      


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
           {!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={40}/>}

            {imageUri && <Image style={styles.image} source={{uri: imageUri }}/>}
        
        </View></TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center', 
        width: 100, 
        height: 100,
        overflow: 'hidden',
    },

    image:{
        width: "100%",
        height: "100%"
    }
});

//make this component available to the app
export default ImageInput
;


