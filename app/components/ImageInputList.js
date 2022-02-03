//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

// create a component
export const ImageInputList = ({imageUris=[], onAddImage, onRemoveImage}) => {

   const scrollView =  useRef()

   



    return (
        <View>
        <ScrollView horizontal ref={scrollView} onContentSizeChange={()=>scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
            {imageUris.map(uri=>  (<View key={uri} style={styles.image}>
                <ImageInput imageUri={uri} key={uri} onChangeImage={()=>onRemoveImage(uri)}/> 
                </View>)
                
                )}
            

          
            <ImageInput onChangeImage={uri => onAddImage(uri)}/>
            
           
        </View>
        </ScrollView></View>
    );
};

const styles = StyleSheet.create({
    container: {
   flexDirection: 'row'
    },

    image:{
        marginRight: 10
    }
});


