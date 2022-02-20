import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "../screens/WelcomeScreen"
import RegisterScreen from "../screens/RegisterScreen"
import LoginScreen from "../screens/LoginScreen"
import colors from "../config/colors"



const Stack = createStackNavigator();


const AuthNavigator = () =>(
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
  )
  

export default AuthNavigator