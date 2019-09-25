import React from 'react'
import {withFormik, Field as FormikField, Form as FormikForm} from 'formik'
import * as Yup from 'yup'

//for styling using ant library
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import axios from 'axios'
const FormItem = Form.Item
const {Option} = Select


const Register = ({values, errors, touched}) => {
  
    return(
        <div>
            <h1>Please Enter More Information About You</h1>
            <FormikForm>
                <Form>

                    
                    <FormItem>
                    {touched.firstname && errors.firstname && <p className="error_message">{errors.firstname}</p>}
                    
                    {/* Formik field for first name */}
                    <FormikField
                        name="firstname"
                        render={({ field }) => <Input 
                        {...field} name="firstname" placeholder="First Name" />}
                            />
                    </FormItem>

                    <FormItem>
                        {/* Formik field for last name */}
                        {touched.lastname && errors.lastname && <p className="error_message">{errors.lastname}</p>}
                        <FormikField
                            name="lastname"
                            render={({ field }) => <Input 
                            {...field} name="lastname" placeholder="Last Name" />}
                                />
                    </FormItem>

                    <FormItem>
                        {/* Formik field for age*/}
                        {touched.age && errors.age && <p className="error_message">{errors.age}</p>}
                        <FormikField
                            name="age"
                            render={({ field }) => <Input 
                            {...field} name="age" placeholder="Age" />}
                        />
                    </FormItem>

                        
                        <FormItem label="Select">
                            {touched.gender && errors.gender && <p className="error_message">{errors.gender}</p>}
                            
                            {/* Formik select menu for gender*/}
                            <Select name="gender" placeholder="Please select your gender" >
                                <Option value='Male'>Male</Option>
                                <Option value='Female'>Female</Option>
                            </Select>

                    </FormItem>


                    {/* this is a div that contains the select menu for both height and inches  */}
                    <div style={{display:"flex", justifyContent: "space-around" }}>
                        
                        {touched.feet && errors.feet && <p className="error_message">{errors.feet}</p>}
                        {touched.inches && errors.inches && <p className="error_message">{errors.inches}</p>}
                        <FormItem label="Feet">

                            {/* drop down menu for feet*/}
                            <Select name="feet" placeholder="ft" style={{width: 120}}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option> 
                            </Select>

                        </FormItem>
                        
                        <FormItem label="inches"  style={{width: 120}}>

                            {/*drop down menu for inches*/}
                            <Select name="inches" placeholder="in">
                                <Option value="0">0</Option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                            </Select>

                        </FormItem>
                    </div>
                    
                    <FormItem>
                    {touched.weight && errors.weight && <p className="error_message">{errors.weight}</p>}

                        {/*Input field for weight*/}
                        <FormikField
                            name="weight"
                            render={({ field }) => <Input 
                            {...field} name="weight" type="number" placeholder="weight(lbs)" />}
                                />
                    </FormItem>

                    
                    <FormItem>
                    {touched.activity && errors.activity && <p className="error_message">{errors.activity}</p>}
                        
                        {/* drop down menu to select activity*/}
                        <Select name='activity' placeholder="Please select an activity level">
                            <Option value="0">0 days</Option>
                            <Option value="2">1-2 days</Option>
                            <Option value="4">3-4 days</Option>
                            <Option value="6">5-6 days</Option>
                            <Option value="7">7 days</Option>
                        </Select>
                    </FormItem>
                    
                    <FormItem>
                        {touched.goals && errors.goals && <p className="error_message">{errors.goals}</p>}

                        {/*Drop down menu for goals*/}
                        <Select name="goals" placeholder="Plese select a goal">
                            <Option value="-20">aggressive weight loss (20% deficit)</Option>
                            <Option value="-15">moderate weight loss (15% deficit)</Option>
                            <Option value="-10">weight loss (10% deficit)</Option>
                            <Option value="0">maintain weight</Option>
                            <Option value="10">moderate weight gain (10% surplus)</Option>
                        </Select>

                    </FormItem>

                    <Button type='primary' htmlType="submit" >Sign Up</Button>
                </Form>
            </FormikForm>
        </div>
    )

}

//used formik to manage form
const SignUp = withFormik({

    mapPropsToValues({firstname, lastname, email, username, password, age, gender, feet, inches, weight, activity, goals}){
        return {
            firstname: firstname || "", 
            lastname: lastname || "",
            email: email || "", 
            username: username || "", 
            password: password || "",
            age: age || 25, 
            gender: gender || "male", 
            feet: feet || 5, 
            inches: inches || 9, 
            weight: weight || 180, 
            activity: activity || 0, 
            goals: goals || -10
        }

    }, 
    validationSchema: Yup.object().shape({
        firstname: Yup.string() 
        .required('Please enter your first name'), 
        lastname: Yup.string()
        .required('Please enter your last name'), 
        email: Yup.string()
        .email('Please enter a valid email ')
        .required('An email is required to create an account'), 
        age: Yup.number()
        .required('Age is required'), 
        gender: Yup.string()
        .required('Please select a gender'), 
        feet: Yup.number()
        .required('Please enter you feet'), 
        inches: Yup.number()
        .required('Please enter your feet'), 
        weight: Yup.number()
        .required('Please enter your weight'),
        activity: Yup.number()
        .required('Please select an acitivty level'), 
        goals: Yup.number()
        .required('Please select a goal')

    }), 
    handleSubmit(values, {resetForm, setStatus}){
        axios
        .post('https://buildweek-macrocalc.herokuapp.com/usermetrics/add/{username}', values)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error.response))
        resetForm()

    }

})(SignUpForm)




export default Register