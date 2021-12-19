// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, SafeAreaView , Text} from 'react-native';


import {Card} from "../components/Card"
import {ListItem} from "../components/ListItem"


export default function ListingDetailsScreen() {


  return (
       <View>
<SafeAreaView style={styles.container}>
    <Card title="red jacket for sale" subtitle="$100" image={require("../assets/jacket.jpg")}/>


</SafeAreaView> 
   <ListItem title="some title" subtitle="List item" image={require("../assets/logo-red.png")} />

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