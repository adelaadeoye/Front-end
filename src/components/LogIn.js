import React from 'react'
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup'

const LogInForm = ({touched, errors}) =>{
    return(
        <Form>
            
            {touched.username && errors.username && <p className="error_message">{errors.username}</p>}
            <Field type="text" name="username" placeholder="username" />

             
            {touched.password && errors.password && <p className="error_message">{errors.password}</p>}
            <Field type="password" name="password" placeholder="password"/>
        </Form>
    )
}

const LogIn = withFormik({
    mapPropsToValues({username, password}){
       return { 
        username: username || "", 
        password: password || ""}
    }, 
    validationSchema:Yup.object().shape({
        email: Yup.string()
        .required('please enter your username'), 

        password: Yup.string()
        .required('please enter your password')

    }), 
    handleSubmit(values){
        console.log(values)
    }
})(LogInForm)

export default LogIn