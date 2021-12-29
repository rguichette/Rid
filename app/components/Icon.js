import React from 'react'
import { View, Text, StyleSheet  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export function Icon({iconName, iconBGColor, iconColor="white"}) {
    return (
        <View style={[styles.icon,{backgroundColor:iconBGColor}]}>
<MaterialIcons  name={iconName} size={26} color={iconColor} />
        </View>
    )
}


const styles = StyleSheet.create({
    icon:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:"center",
        borderRadius: 50

    }
})