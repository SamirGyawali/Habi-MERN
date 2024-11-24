import React from 'react';
import './login.scss';

const Login = () => {
    return (
        <div className='loginPage'>
            <div className="topWrapper">
                <div>
                    <p className='habiText'>Habi</p>
                </div>
                <div className="infoDiv">
                    <p className='taska'>Welcome Back</p>
                    <p className='taskb'>Please enter your details</p>
                </div>
            </div>
            <div className="formFields">
                <form action="/submit" method='POST'>
                    <div className="formGroup">
                        <label htmlFor="username">Email</label>
                        <input type="text" id='username' name='username' required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' required />
                    </div>
                    <button type='submit' className='submitButton'>Login</button>
                </form>
            </div>
                <div className="lastPart">
                    <div>
                        <span className='already'>Don't have account? </span><button className='signup'>signup</button>
                    </div>
                    <p>By signing up, You agree to terms of service of Habi</p>
                </div>
        </div>
    );
};

export default Login;