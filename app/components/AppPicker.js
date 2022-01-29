import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

import {AppText} from "./AppText"
import { Screen } from '../screens/Screen'
import PickerItem from './PickerItem'

export function AppPicker({icon,items,onSelectItem, placeholder, selectedItem, style}) {
    const [modalVisible, setModalVisible] = useState(false)
    
    return (
        <>

        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={[styles.container, style]}>
           {icon && <MaterialCommunityIcons name={icon}  size={20} style={styles.icon}/> }

        <AppText style={[styles.text,{color: !selectedItem ? "#cecece": 'black'}]}>{selectedItem ? selectedItem.label : placeholder}</AppText>

        <MaterialCommunityIcons name="chevron-down"  size={20}/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Screen >
            <Button title="close" onPress={() => setModalVisible(false)}/>
            <FlatList 
            numColumns={3}
            data={items}
            keyExtractor={item => item.value.toString()}
            
            renderItem ={({item})=><PickerItem style={{borderColor:"black", marginLeft: 40, margin: 10
        }} label={item.label} labelIcon={item.icon} iconBGColor={item.iconBGColor}  onPress={()=>{

                  setModalVisible(false);
                onSelectItem(item)
            }
                  
            }/>}
            />
            
            </Screen>
        </Modal>

       </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25, 
        flexDirection: 'row',
        width: "100%",
        // padding: 15,
        marginVertical: 10
    },
    
  icon:{
    //   marginRight: 10
   
  },
  iconList:{
backgroundColor: 'yellow',
alignContent:"center",
// borderWidth: 4


  },
  text:{
      flex: 1
  },
    // textInput: defaultStyles.text
})