import React, {useState, useEffect} from 'react'
import {Link} from 'react-dom-router'
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup'
import axios from axios

//Sign up form
const SignUpForm = () => {
    //user state for new user
    const [user, setUser] = useState({})
    return(
        <Form>
            //first and last name
            <Field type="text" name="firstname" placeholder="First Name"/>
            <Field type="text" name="lastname" placeholder="Last Name" />

            <Field type="text" name="email" placeholder="Your email address"/>

            <Field type="text" name="username" placeholder="Username"/>
            <Field type="password" name="password" placeholder="Password"/>

            <Field type="number" name="age" placeholder="Age" />

            <Field component="select" name="gender" >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </Field>

            <div>Your Height

                
            </div>

        </Form>
    )

}

//used formik to manage form
const SignUp = withFormik({

    mapPropsToValues(){

    }, 
    validationSchema: Yup.object().shape({

    }), 
    handleSubmit(){

    }

})(SignUpForm)





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

