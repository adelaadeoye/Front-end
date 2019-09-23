import React from 'react'
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup'

const LogInForm({touched, errors}){
    return(
        <Form>


        </Form>
    )
}

const LogIn = withFormik({
    mapPropsToValues({username, password}){
        username: username || "", 
        password: password || ""
    }
})

export default LogIn