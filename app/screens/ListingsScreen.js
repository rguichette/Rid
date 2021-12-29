import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Card } from '../components/Card'
import { Screen } from './Screen'

export default function ListingsScreen() {
    let DATA = 
       [{ title: "title_one",
        subtitle: "subtitle_one", 
        image: "../assets/jacket.jpg"}, 
       
        { title: "title_two",
        subtitle: "subtitle_two", 
        image: "../assets/jacket.jpg"}
    
    ]
    
    return (
        <Screen>
            <FlatList data={DATA} renderItem={({item})=>{
                    let imageUrl = item.image;
                    console.log(imageUrl);
                  return <Card title={item.title} subtitle={item.subtitle}/>

            }
            // console.log(item.image)
            
        }
                
                />
            {/* <Card title="title one" subtitle="100"image={require("../assets/jacket.jpg")} />
            <Card title="title one" subtitle="180"image={require("../assets/jacket.jpg")} /> */}

        </Screen>
    )
}
