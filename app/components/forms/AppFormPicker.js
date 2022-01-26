import React, {useState} from 'react'
import {useFormikContext} from 'formik'



import { AppForm } from '.'
import { AppPicker } from '../AppPicker'





export default function AppFormPicker({ items, name, placeholder,style}) {
    const {values, setFieldValue, touched, errors} = useFormikContext()


    return (
        <AppForm >
                    <AppPicker 

                    placeholder={placeholder} 
                    items={items} 
                    onSelectItem={(item)=> {setFieldValue(name, item)}}
                    selectedItem={values[name]}
                    visible={touched[name]}
                    style={style}
                 

                   
                    
                    />
                    {/* {console.log(items)} */}

        </AppForm>
        
    )
}
