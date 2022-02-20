import React from 'react';
import { View, Text,SafeAreaView, StyleSheet, StatusBar, ImageBackground, Image, Platform }  from 'react-native';
import { AppBtn } from '../components/AppBtn';




export default function WelcomeScreen({navigation}) {
  return ( 

    <ImageBackground blurRadius={8} style={styles.backgroundImage} source={require("../assets/background.jpg")}>
           <SafeAreaView >
                <View style={styles.logo}>
                 <Image resizeMode='contain' style={{flex:1}} source={require("../assets/logo-red.png")}/>
                
                 <Text style={{fontWeight:'800', fontSize:16, paddingTop:16}} >Sell what you don't need</Text>
                </View>



           </SafeAreaView>
                    <View style={styles.btnWrapper}>
                    <AppBtn title="LOGIN" color="primary" onPress={()=>{navigation.navigate("Login")}}/>
                    <AppBtn title="SIGNUP" color="secondary" onPress={()=>{navigation.navigate("Register")}} />
                    </View>

        {/* <View ></View> */}
        {/* <View style={styles.signup}></View> */}
           </ImageBackground>

    
  );
}


const styles = StyleSheet.create({
    container:{
     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
     flex: 1
        },
    backgroundImage:{
flex: 1,
// flexDirection: 'row',
justifyContent: 'flex-end',
// alignContent: 'center',

    },
logo:{
bottom: 500,
// backgroundColor: 'red',
justifyContent: 'center',
alignItems: 'center',
width: '100%',
height: 100
},


btnWrapper:{
// backgroundColor: 'red',
padding: 10,
// paddingBottom: 30,
width: '100%',
}

    // login:{
    //     backgroundColor:"#fc5c65",


    //     width:"100%",
    //     height: 60,
                
    // },
    // signup:{
    //     backgroundColor:"#4ECDC4",
    //     width:"100%",
    //     height: 60,
    // }

})