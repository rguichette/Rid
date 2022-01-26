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
        {label:"Furniture", value: 1, icon: "floor-lamp", iconBGColor: "#fc5c65"},
        {label:"Cars", value:2, icon: "car", iconBGColor: "#fd9644" },
        {label:"Cameras", value: 3, icon: "camera", iconBGColor: "#fed330"},
        {label:"Games", value: 4, icon: "cards", iconBGColor: "#26de81"},
        {label:"Clothing", value: 5, icon: "shoe-heel", iconBGColor: "#2bcbba"},
        {label:"Sports", value: 6, icon: "basketball", iconBGColor: "#45aaf2"},
        {label:"Movies & Music", value: 7, icon: "floor-lamp", iconBGColor: "#4b7bec"},
        {label:"Books", value: 7, icon: "book", iconBGColor: "#9C67E3"},
        {label:"Other", value: 7, icon: "other", iconBGColor: "#7C8DA2"}
       
       
        // {label:"Cameras", value: 8, icon: "floor-lamp", iconBGColor: "#fc5c65"},
        // {label:"Cameras", value: 9, icon: "floor-lamp", iconBGColor: "#fc5c65"},
      
      
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
                
                <AppFormPicker style={styles.category} name="category" items={categories}  placeholder="Categories" />

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

