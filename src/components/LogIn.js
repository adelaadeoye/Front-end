import React, {useState, useEffect} from 'react'
import {withFormik, Field, Form as FormikForm, Field as FormikField} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

//ant
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item

const LogInForm = ({touched, errors, status}, props) =>{
   
    
    return(
        <div>
            <h1>Login</h1>
            <FormikForm>
                
                <Form>
                    <FormItem>
                        {touched.username && errors.username && <p className="error_message">{errors.username}</p>}
                        
                        <FormikField
                            name="username"
                            render={({ field }) => <Input 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            {...field} name="username" placeholder="username" />}
                        />
                    </FormItem>

                    <FormItem>  
                    {touched.password && errors.password && <p className="error_message">{errors.password}</p>}
                    
                    <FormikField
                        name="password"
                        render={({ field }) => <Input {...field} 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        name="password" type="password" placeholder="password" />}
                    />
                    </FormItem>
                <Button type="primary" htmlType="submit">LogIn</Button>
                </Form>
            </FormikForm>
        </div>
    )
}

const LogIn = withFormik({
    mapPropsToValues({username, password}){
       return { 
        username: username || "", 
        password: password || ""}
    }, 
    validationSchema:Yup.object().shape({
        username: Yup.string()
        .required('please enter your username'), 

        password: Yup.string()
        .required('please enter your password')

    }), 
    handleSubmit(values, {resetForm, setStatus}){
        axios
        .post('https://reqres.in/api/users/', values)
        .then(response => {
            if (values.username === "" && values.password === ""){

            }else if(response.data.code == 204){
                console.log("password doesn't match")
            }else{
                console.log("username does not exist")
            }
        })
        .catch(error => console.log(error.response))
        resetForm()

    }
})(LogInForm)

export default LogIn