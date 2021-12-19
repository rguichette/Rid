import React from 'react'

import {Image, View, StyleSheet,Text} from 'react-native'

export function ListItem({image, title, subtitle }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.titleGroup}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View>
                
            </View>

            <View>
                <Image resizeMode="contain" style={styles.image} source={image}/>
           </View>
            
       </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor:'green',
        width: "100%",
        height: 80,
        // flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        // overflow: 'hidden'
    },
    image:{
        width: 80,
        // height: "100%",
        flex: 1,
        borderRadius: 50,
        borderWidth: 3,
        // flex: 1
        marginRight: 10,
        marginLeft: 5
        



},
subtitle:{
    color: '#6e6969'
},
title:{
fontWeight:"500"
},

titleGroup:{
    backgroundColor: 'yellow',
    height: "100%",
    flex: 1,
    paddingLeft: 10
}
})
