import React from 'react'

import {Image, View, StyleSheet,Text, TouchableHighlight} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';




import colors from "../config/colors"

export function ListItem({image, title, subtitle, onPress, renderRightActions, style, IconComponent }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        
        <View style={[styles.container, style]}>
            <View style={styles.titles}>
            <Text style={styles.title} >{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text> }
            </View>
            {image && <Image resizeMode="contain" style={styles.image} source={image}/>}
            {IconComponent}

            
       </View>
       </TouchableHighlight></Swipeable>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 10,
        backgroundColor:'white'

    },
  
    image:{
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 3,
},
title:{
    fontWeight: "700"
},
titles:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5
}
})
