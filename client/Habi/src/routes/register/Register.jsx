import React from 'react';
import './register.scss';

const Register = () => {
    return (
        <div className='registerPage'>
            <div className="topWrapper">
                <div>
                    <p className='habiText'>Habi</p>
                </div>
                <div className="infoDiv">
                    <p className='taska'>Register your Account</p>
                    <p className='taskb'>Please enter your details</p>
                </div>
            </div>
            <div className="formFields">
                <form action="/submit" method='POST'>
                    <div className="formGroup">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' name='username' required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="username">Confirm Password</label>
                        <input type="password" id='confirmPassword' name='confirmPassword' required />
                    </div>
                    <button type='submit' className='submitButton'>Submit</button>
                </form>
            </div>
                <div className="lastPart">
                    <div>
                        <span className='already'>Already have account? </span><button className='loginText'>login</button>
                    </div>
                    <p>By signing up, You agree to terms of service of Habi</p>
                </div>
        </div>
    );
};

export default Register;