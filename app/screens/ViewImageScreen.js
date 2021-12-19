import React from 'react';
import { View, Text,SafeAreaView, StyleSheet, StatusBar, ImageBackground, Image,Platform }  from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import colors from '../config/colors'


export function ViewImageScreen() {

  return ( 
      <SafeAreaView style={styles.container}>
        <View style={styles.btnContainer}>
            <MaterialCommunityIcons  style={styles.btns} name="close" size={32}/>
            <MaterialCommunityIcons  style={styles.btns} name="delete" size={32}/>

            {/* <View style={styles.deleteBtn}></View> */}
            {/* <View style={styles.exitBtn}></View> */}
        </View>
        

      <Image resizeMode="contain" style={{width:"100%", flex:1}} source={require("../assets/chair.jpg")}/>

      </SafeAreaView>



//   <View>
//   </View>

    
  );
}


const styles = StyleSheet.create({
container:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor:colors.black
},
btnContainer:{
// flex:1,
width: "100%", 
// backgroundColor:"green",
flexDirection: "row",
justifyContent:"space-between",
paddingLeft: 25,
paddingRight: 25
},
btns:{
// backgroundColor:colors.secondary,
width: 40,
height:40,
color:'white'

},
exitBtn:{
    backgroundColor:colors.primary,
    width: 40,
height:40

}



})