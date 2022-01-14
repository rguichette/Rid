import React from 'react'
import {useFormikContext} from 'formik' 

import {AppBtn} from '../AppBtn'

export function SubmitBtn({title}) {
    const {handleSubmit} = useFormikContext();


    return (
        <AppBtn title={title} onPress={handleSubmit}/>
    )
}
 