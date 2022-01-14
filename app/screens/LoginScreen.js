import React, {useState} from 'react'
import {StyleSheet, Image, Text} from 'react-native'
import * as Yup from 'yup'


import { Screen } from './Screen'

import {AppForm, AppFormField, SubmitBtn} from '../components/forms'

// import {AppFormField} from '../components/forms/AppFormField'
// import {SubmitBtn} from '../components/forms/SubmitBtn'
// import { AppForm } from '../components/forms/AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {

// const [email, setEmail] = useState()
// const [password, setPassword] = useState()


    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")}/>

            <AppForm
            initialValues={{email:'', password:''}}
            onSubmit={values =>console.log(values)}
            validationSchema={validationSchema}
            >
                   <AppFormField
            autoCapitalize="none" 
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"

            placeholder="Email" 
            
            textContentType="emailAddress"
            />
            <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            />
            <SubmitBtn title="Login"/>  
            
                 
               
            </AppForm>
          
           
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf:'center',
        marginTop: 50,
        marginBottom: 50
    }
})