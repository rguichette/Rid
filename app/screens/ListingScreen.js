import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, StyleSheet, Button } from 'react-native'

import { Card } from '../components/Card'
import { Screen } from './Screen'
import ActivityIndicator from '../components/ActivityIndicator'

import AppText from '../components/AppText'
import {AppBtn} from '../components/AppBtn'


import listingsApi from '../api/Listings'
import useApi from '../hooks/useApi'

export default function ListingScreen({navigation}) {

const {data , error, loading,request: loadListings }  =  useApi(listingsApi.getListings);
    console.log("listings", )


useEffect(() =>{
    loadListings();
}, [])


    // let DATA = 
    //    [{
    //     id: "oowpad" ,
    //     title: "title_one",
    //     subtitle: "subtitle_one", 
    //     image: require("../assets/jacket.jpg"),
    //     price: 231
    // }, 
      
       
    //     {
    //     id: "twawlf", 
    //     title: "title_two",
    //     subtitle: "subtitle_two", 
    //     image: require("../assets/ipad.jpg")
    // }
    
    // ]
    
    return (

        <Screen style={styles.screen}>
         {console.log(data)}
           {error && (
           <>
           <AppText>Couldn't retrieve the listings</AppText>
           <AppBtn title="Retry" onPress={loadListings}/>
           
           </>)}
           <ActivityIndicator visible={loading}/>
            <FlatList 
            data={data} 
            keyExtractor={item => item.id.toString()} 
            renderItem={({item})=>{
                
                    let imageUrl = item.image;
                    console.log(imageUrl);
                  return <Card title={item.title} subtitle={item.subtitle} imageUrl={item.images[0].url} onPress={()=>{navigation.navigate("ListingDetails", {item:item})}}/>

            }

            
            
        }
                
                /> 

        </Screen>
    )
}


const styles = StyleSheet.create({
    screen:{
        padding: 20
    }
})