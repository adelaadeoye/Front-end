import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'
import img from '../img/healthy_habits.png'

import 'antd/dist/antd.css';
import {Button, Card} from 'antd'

const SideInformation = props => {
    return (
    <div class="sidePanel">
        <p className="quote">{props.quote}</p> 
        <p className="author">{props.author}</p>
        <p className="message">{props.message}</p>

        <Button onClick={ props.click}>{props.button}</Button>
    </div>
    )
}
const FormContainer = props => {
    const [returningUser, setReturningUser] = useState(true)
    const switchForm = () => setReturningUser(!returningUser)

    const OtherOption = (props) => {
        
        return(
            <div> 
                <p>{props.text}</p>
                <Button onClick={() => switchForm()}>{props.label}</Button>
            </div>
        )
    }
    return(
        
         <div className='container'>
                <div className="img-container">
                    <img style={{width: "100%"}} src={img} alt="healthy"/>
                </div>
                <div class="otherForm">
                  
                </div>
                
                <div class="currentForm">
                    {
                        (returningUser) ? <LogIn /> : <SignUp />
                        
                    }
                    {
                        (returningUser) ? <OtherOption text="Don't have an account?" label="Sign Up"/> : <OtherOption text =" Already have an account?" label="Log in"/>
                    }
                </div>

            </div>

        
    )
}
export default FormContainer
