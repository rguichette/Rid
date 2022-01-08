import React from 'react'
import {View, TextInput, StyleSheet, Platform} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export function AppTextInput({icon, ...props}) {
    return (
        <View style={styles.container}>
           {icon && <MaterialCommunityIcons name={icon}  size={20} style={styles.icon}/> }
            <TextInput style={defaultStyles.text} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25, 
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    
  icon:{
      marginRight: 10
   
  },
    textInput:{
       fontSize: 18,
       color:colors.dark,
       fontFamily:  Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})