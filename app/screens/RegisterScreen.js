import React from 'react'
import {Text} from 'react-native'
import { AppTextInput } from '../components/AppTextInput'

import { AppFormField, SubmitBtn } from '../components/forms'
import { AppForm } from '../components/forms'
import { Screen } from './Screen'

import * as Yup from 'yup'





const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    username: Yup.string().required().min(4).label("Username"),
    password: Yup.string().required().min(4).label("Password")
})




export function RegisterScreen() {
    return (
        <Screen style={{padding: 10}}> 
<AppForm 
 initialValues={{email:'', password:''}}
 onSubmit={values =>console.log(values)}
 validationSchema={validationSchema}
>

<AppFormField   
autoCapitalize="none" 
autoCorrect={false}
icon="account"
name="username"
placeholder="Username" 
/>

<AppFormField   
autoCapitalize="none" 
autoCorrect={false}
icon="email"
keyboardType="email-address"
name="email"
placeholder="Email" 
/>

<AppFormField   
autoCapitalize="none" 
autoCorrect={false}
icon="lock"
name="password"
placeholder="Password" 
secureTextEntry
/>

<SubmitBtn title="Register"/>

</AppForm>



        </Screen>
    )
}
