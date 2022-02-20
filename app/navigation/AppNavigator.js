import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyAccountScreen from '../screens/MyAccountScreen'
import ListingScreen from '../screens/ListingScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';


const Tab = createBottomTabNavigator();


const AppNavigation = ({color,size}) =>(
    
    <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name="Feed" component={FeedNavigator} options={{tabBarIcon:({size, color})=> <MaterialCommunityIcons name='home' color={color} size={size}/>}} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({navigation})=>({tabBarButton:({size, color})=> <NewListingButton onPress={()=>navigation.navigate("ListingEdit")}/>,tabBarIcon:({color, size})=> <MaterialCommunityIcons name='plus-circle' color={color} size={size}/>})} />
    <Tab.Screen name="Account" component={AccountNavigator} />
   
    
  </Tab.Navigator>
  )


  export default AppNavigation