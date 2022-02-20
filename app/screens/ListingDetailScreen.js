// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, SafeAreaView , Text} from 'react-native';


import {Card} from "../components/Card"
import {ListItem} from "../components/ListItem"


export default function ListingDetailScreen(props) {
const {item} = props.route.params
console.log(item)
  return (
       <View>
<SafeAreaView style={styles.container}>
    <Card title="red jacket for sale" subtitle={item.price} image={item.image}/>


</SafeAreaView> 
   <ListItem title={item.title} subtitle={item.subtitle} image={require("../assets/logo-red.png")} />

{/* {console.log(require("../assets/splash.png"))} */}
</View>


  );
}



const styles = StyleSheet.create({
  // cardView:{
  //   backgroundColor: '#FFFFFF',
  //   height: 400,
  //   width:"100%"

  // },
  container:{
      backgroundColor:"#f8f4f4",
    alignContent:"center",
      justifyContent: "center",
      // flex:1,
      alignItems: "center",
      height: 400
  }
})