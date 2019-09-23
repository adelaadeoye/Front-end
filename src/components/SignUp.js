import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup'


//Sign up form
const SignUpForm = ({values, errors, touched }) => {
    //user state for new user
    //const [user, setUser] = useState({})
    return(
        <Form>
            
            {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
            <Field type="text" name="firstname" placeholder="First Name"/>

            {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
            <Field type="text" name="lastname" placeholder="Last Name" />

            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="text" name="email" placeholder="Your email address"/>

            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="text" name="username" placeholder="Username"/>

            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password"/>

            {touched.age && errors.age && <p>{errors.age}</p>}
            <Field type="number" name="age" placeholder="Age" />

            {touched.gender && errors.gender && <p>{errors.gender}</p>}
            <Field component="select" name="gender" >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </Field>

            {touched.height && errors.height && <p>{errors.height}</p>}
            {touched.inches && errors.inches && <p>{errors.inches}</p>}
            <div>
                <label> Feet:
                    <Field component="select" name="feet">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option> 
                    </Field>
                </label>

                <label>
                    Inches: 
                    <Field component="select" name="inches">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </Field>

                </label>
            </div>

            <Field type='number' name="weight" placeholder="weight"/> <span>(lbs)</span>

            {touched.activity && errors.activity && <p>{errors.activity}</p>}
            <Field component="select" name='activity'>
                <option value="0">0 days</option>
                <option value="2">1-2 days</option>
                <option value="4">3-4 days</option>option>
                <option value="6">5-6 days</option>
                <option value="7">7 days</option>
            </Field>
            
            {touched.goals && errors.goals && <p>{errors.goals}</p>}
            <Field component="select" name="goals">
                <option value="-20">aggressive weight loss (20% deficit)</option>
                <option value="-15">moderate weight loss (15% deficit)</option>
                <option value="-10">weight loss (10% deficit)</option>
                <option value="0">maintain weight</option>
                <option value="10">moderate weight gain (10% surplus)</option>
            </Field>

            <button type="submit">Sign Up</button>
        </Form>
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
        username: Yup.string()
        .required('An username required to create an account'), 
        password: Yup.string()
        .required('Please enter a password'), 
        age: Yup.number()
        .required('Age is required'), 
        gender: Yup.string()
        .required('Please select a gender'), 
        feet: Yup.number()
        .required('Please enter you height'), 
        inches: Yup.number()
        .required('Please enter your height'), 
        weight: Yup.number()
        .required('Please enter your weight'),
        activity: Yup.number()
        .required('Please select an acitivty level'), 
        goals: Yup.number()
        .required('Please select a goal')

    }), 
    handleSubmit(values, {resetForm}){

        console.log(values)
        resetForm()

    }

})(SignUpForm)




export default SignUp
/*

gender,
 age, 
 height (drop down list of heights listed as 5’ 7”, 5’ 8”, etc., 
    current weight in lbs, 
    how many days per week they exercise (drop down list: 0 days, 1-2 days, 3-4 days, 5-6 days, 7 days) and 
    their goal (drop down list: aggressive weight loss (20% deficit), moderate weight loss (15% deficit), weight loss (10% deficit), 
    maintain weight, moderate weight gain (10% surplus), 
aggressive weight gain (15% deficit)
*/

