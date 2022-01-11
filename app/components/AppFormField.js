import React from 'react'
import {useFormikContext} from 'formik'


import {AppTextInput} from "./AppTextInput"
import {ErrorMessage} from './ErrorMessage'

export function AppFormField({name, ...otherprops}) {
    
const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

    return (
       <>
       
        <AppTextInput 

            onBlur={()=> setFieldTouched(name) }
            onChangeText={handleChange(name)}
            {...otherprops}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>            
       
       </>
    )
}
