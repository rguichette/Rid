import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

export function AppBtn({title, color, ...props}) {
    
    console.log(colors["primary"])
    return (
       
        <TouchableOpacity style={[{backgroundColor: colors[color]}, styles.container]} {...props} >
            <Text style={{
                    color: "white",
                    fontWeight: '700' 

            }}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnText:{
        color: "white",
        fontWeight: '700'
    },
    container:{
        backgroundColor:colors.primary,
        width: "100%", 
        height: 40,
        borderRadius: 20,
        justifyContent:"center",
        alignItems:'center',
        marginVertical:5
    }
})