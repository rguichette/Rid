import React from 'react'
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'

export function Card({title, subtitle, image, onPress}) {
    return (
      <TouchableWithoutFeedback onPress={onPress ? onPress : null}>
      <View style= {styles.container}>
          <Image resizeMode="cover" source={image} style= {styles.image}/>
       <View style={styles.info}>
         <Text style={styles.text}>{title}</Text>  
         <Text>{subtitle}</Text>
       </View>
        
     </View></TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderRadius: 10,
        // borderWidth: 1,
        
        width: 350,
        height: 300,
        marginBottom:15


    }, 
    image:{
        flex: 1,
        width:"100%",
        borderRadius: 10,
        },
    info:{
        // backgroundColor: 'red',
        padding: 10,
        overflow: 'hidden'
    },
    text:{
        paddingBottom: 5,
        fontWeight: "600"
    }
})
