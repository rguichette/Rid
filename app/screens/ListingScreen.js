import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { Card } from '../components/Card'
import { Screen } from './Screen'

export default function ListingScreen({navigation}) {
    let DATA = 
       [{
        id: "oowpad" ,
        title: "title_one",
        subtitle: "subtitle_one", 
        image: require("../assets/jacket.jpg"),
        price: 231
    }, 
      
       
        {
        id: "twawlf", 
        title: "title_two",
        subtitle: "subtitle_two", 
        image: require("../assets/ipad.jpg")
    }
    
    ]
    
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={DATA} 
            keyExtractor={item => item.id.toString()} 
            renderItem={({item})=>{
                
                    let imageUrl = item.image;
                    console.log(imageUrl);
                  return <Card title={item.title} subtitle={item.subtitle} image={item.image} onPress={()=>{navigation.navigate("ListingDetails", {item:item})}}/>

            }

            
            // console.log(item.image)
            
        }
                
                />
            {/* <Card title="title one" subtitle="100"image={require("../assets/jacket.jpg")} />
            <Card title="title one" subtitle="180"image={require("../assets/jacket.jpg")} /> */}

        </Screen>
    )
}


const styles = StyleSheet.create({
    screen:{
        padding: 20
    }
})