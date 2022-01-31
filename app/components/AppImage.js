//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
export const AppImage = ({imageUri}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:imageUri}} style={styles.image} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
       
 
    },

image: {
    width: 100,
    height: 100,
    borderRadius: 5
}

});


;
