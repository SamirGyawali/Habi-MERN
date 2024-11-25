import React, { useState } from 'react';
import './register.scss';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try{
            const res = await axios.post("http://localhost:8800/api/auth/register", {username,email, password})
            console.log(res.data)

            navigate("/login");

        }catch(err){
            setError(err.response.data.message)
        }

    }
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
                {error && <span>{error}</span>}
            </div>
            <div className="formFields">
                <form onSubmit={handleSubmit}>
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
                    <button className='submitButton'>Register</button>
                </form>
            </div>
                <div className="lastPart">
                    <div>
                        <span className='already'>Already have account? </span><button className='loginText'>login</button>
                    </div>
                    <p>By signing up, you agree to Habbi's Terms of Service and Privacy Policy.</p>
                </div>
        </div>
    );
};

export default Register;