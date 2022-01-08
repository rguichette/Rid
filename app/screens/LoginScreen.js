import React, {useState} from 'react'
import {StyleSheet, Image, Text} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'

import { AppBtn } from '../components/AppBtn'
import { AppTextInput } from '../components/AppTextInput'
import { Screen } from './Screen'
import {AppText} from '../components/AppText'

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

            <Formik
            initialValues={{email:'', password:''}}
            onSubmit={values =>console.log(values)}
            validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors}) =>(
                 <>
                  <AppTextInput 
            autoCapitalize="none" 
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            placeholder="Email" 
            textContentType="emailAddress"
            />
            <AppText style={{color: 'red'}} >{errors.email}</AppText>
            
            <AppTextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon="lock"
            onChangeText={handleChange('password')}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            />
            <AppText style={{color: 'red'}} >{errors.password}</AppText>


            <AppBtn title="Login" onPress={handleSubmit} />
                 
                 </>   
                )}
            </Formik>
          
           
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