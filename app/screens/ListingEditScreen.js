import React from 'react'
import { Text, StyleSheet } from 'react-native'
import * as Yup from 'yup'


import colors from '../config/colors'

import { AppForm, AppFormField, SubmitBtn } from '../components/forms'
import AppFormPicker from '../components/forms/AppFormPicker'
import { Screen } from './Screen'


const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().max(255).label("Description"),
    category: Yup.object().required().label("Category")
})



export function ListingEditScreen() {

    const categories = [
        {label:"Furniture", value: 1},
        {label:"Clothing", value:2 },
        {label:"Cameras", value: 3}
      
      ]
    

    return (
        <Screen>

            <AppForm
            initialValues={{title:'', price:'', description:'', category:null}}
            onSubmit={values =>console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField  name="title" placeholder="Title" />

                <AppFormField style={styles.price} name="price" placeholder="Price" maxLength={8}/>
                
                <AppFormPicker style={styles.category}  name="category" items={categories}  placeholder="Categories" />

                <AppFormField name="description" placeholder="Description"/>

                <SubmitBtn title="POST"/>


            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    price:{
        // backgroundColor: 'red',
        width: 100
        },
    category: {
        width: 200,
        // color: colors.medium
    }
})

