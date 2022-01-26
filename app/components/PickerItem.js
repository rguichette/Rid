import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'



import { TouchableOpacity, View, StyleSheet} from 'react-native'
import AppText from './AppText'

export default function PickerItem({iconBGColor="red", label, labelIcon, onPress, ...otherprops}) {


    return (
        <TouchableOpacity onPress={onPress} {...otherprops}>
            {labelIcon && 
            <View style={styles.itemContainer} > 
                <View style={[styles.icon, {backgroundColor:iconBGColor}]}>
                    <MaterialCommunityIcons name={labelIcon} size={30}/>
                </View>
                <AppText style={styles.text}>{label}</AppText>
            </View>
            }
            
        </TouchableOpacity>  
        
        )
}


const styles = StyleSheet.create({
    icon:{
    //   backgroundColor: 'red',
      width: 50, 
      height: 50,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: 'center'

    },
    itemContainer:{
        alignItems: 'center',
       width: 80
    },
    text:{
        textAlign: 'center',
        marginTop: 5
    }
})