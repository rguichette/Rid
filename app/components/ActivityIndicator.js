import React from 'react';
import LottieView from 'lottie-react-native'
import {View} from 'react-native'
function ActivityIndicator({visible=false}) {
    if(!visible) return null

  return <View style={{ width:"70%", height: "100%", alignSelf:'center'}}>
      <LottieView 
  
  autoPlay 
  loop 
  source={require("../assets/animations/loader.json")}/>
  </View>
}
{/* <LottieView 
  
  autoPlay 
  loop 
  source={require("../assets/animations/loader.json")}/> */}

export default ActivityIndicator;