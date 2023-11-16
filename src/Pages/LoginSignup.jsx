import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign In</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your UserName'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Bot have an account? <span>Sign up here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
