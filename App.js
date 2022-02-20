import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import navigationTheme from './app/navigation/navigationTheme'
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import MyAccountScreen from './app/screens/MyAccountScreen'
import ListingScreen from './app/screens/ListingScreen'
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen'
import MessagesScreen from './app/screens/MessagesScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigation from './app/navigation/AppNavigator';



const AccountNavigation = () =>(
  <Stack.Navigator screenOptions={{  headerShown: true}} >
  <Stack.Screen name="AccountNavigation" options={{title: "Account",  headerShown: false}} component={MyAccountScreen} />
  <Stack.Screen name="MessagesScreen" component={MessagesScreen}  options={{title: "Messages"}}/>
</Stack.Navigator>
)
















export default function App() {

  

  return (
<NavigationContainer theme={navigationTheme}>
  <AppNavigation/>
</NavigationContainer>


    );
}


