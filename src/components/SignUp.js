
import React from 'react'
import {withFormik, Field as FormikField, Form as FormikForm} from 'formik'
import * as Yup from 'yup'

import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';

import axios from 'axios'

const FormItem = Form.Item
const {Option} = Select


const SignUpForm = ({errors, touched}) => {
  
    return(
        <div>
            <h1>Register</h1>
            <FormikForm>
                <Form>
                    <FormItem>
                        {touched.username && errors.username && <p className="error_message">{errors.username}</p>}
                        <FormikField
                            name="username"
                            render={({ field }) => <Input 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            {...field} name="username" placeholder="UserName" />}
                                />
                    </FormItem>

                    <FormItem>
                        {touched.password && errors.password && <p className="error_message">{errors.password}</p>}
                        <FormikField
                            name="password"
                            render={({ field }) => <Input 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            {...field} name="password" type="password" placeholder="password" />}
                                />
                    </FormItem>

                    <Button type='primary' htmlType="submit" >Sign Up</Button>
                </Form>
            </FormikForm>
        </div>
    )

}

//used formik to manage form
const SignUp = withFormik({

    mapPropsToValues({username, password}){
        return {
            username: username || "", 
            password: password || "",
        }

    }, 
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required('An username required to create an account'), 
        password: Yup.string()
        .required('Please enter a password'), 

    }), 
    handleSubmit(values, {resetForm, setStatus}){
        axios
        .post('https://buildweek-macrocalc.herokuapp.com/createnewuser', values)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error.response))
        resetForm()

    }

})(SignUpForm)




export default SignUp