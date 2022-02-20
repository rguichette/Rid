import React, {useState} from 'react'

import { FlatList,SafeAreaView, StyleSheet, Platform, StatusBar, View} from 'react-native'

// import Constants from 'expo-constants'

import { ListItem } from '../components/ListItem'
import {Screen} from './Screen'
import { ListItemSeperator } from '../components/ListItemSeperator'
import { ListItemDeleteAction } from '../components/ListItemDeleteAction'


const initMessages = [{
    id:1,
    title:'T1',
    description:'A1',
    image: require('../assets/icon.png')
},
{
    id:2,
    title:'U1',
    description:'B1',
    image: require('../assets/icon.png')
},
{
    id:4,
    title:'V4',
    description:'C1',
    image: require('../assets/icon.png')
}



]

export default function MessagesScreen({navigation}) {
    const [messages, setMessages] = useState(initMessages)
    const [refreshing, setRefreshing] = useState(false)

    // console.log(navigation)

    const handleDelete = message =>{
        //Delete the message from messages
      setMessages(messages.filter (m => m.id !== message.id))
        //call server to delete message there as well
    }

    return (
        <Screen style={{flex:1}}>
       <FlatList 
       data={messages} 
       keyExtractor={message => message.id.toString()}
       refreshing={refreshing}
       onRefresh={()=>{
           setMessages([{
               id:930,
               title:'Yw',
               description:'N1',
               image: require('../assets/icon.png')
           }])
       }}
       renderItem={({item})=>
       <ListItem 
       title={item.title}
        subtitle={item.description}
        image ={item.image}
        onPress={()=>console.log("message selected", item)}
        renderRightActions={()=> <ListItemDeleteAction onPress={()=>handleDelete(item)}/> }
    
        />
    
    }
       
 ItemSeparatorComponent={ListItemSeperator

}
       />
       </Screen>
    )
}
