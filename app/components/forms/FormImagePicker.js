//import liraries
import React from 'react';
import { ImageInputList } from '../ImageInputList';
import { useFormikContext } from 'formik';

import {ErrorMessage} from './ErrorMessage';

// create a component
export const FormImagePicker = ({name}) => {
    const {values, setFieldValue, touched, errors} = useFormikContext()


    const handleAdd = uri =>{
        setFieldValue(name, [...values[name], uri])
      }
    
      const handleRemove = uri =>{
        setFieldValue(name, values[name].filter(imageUri => imageUri !== uri))
      }

      



    return (
        <>
       <ImageInputList imageUris={values[name]} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
       <ErrorMessage error={errors[name]} visible={touched[name]}/>            

       </>
    );
};



