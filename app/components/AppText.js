import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

export function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text:{
        color:'tomato',
        ...Platform.select({
            ios:{
            
              fontSize: 40, 
              fontFamily: "Avenir"
            },
            android:{
              fontSize: 18,
              fontFamily: 'Roboto'
            }
          })
    }
})


export default AppText;