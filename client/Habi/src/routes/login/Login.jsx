import React, { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../components/lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const {updateUser} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    const formData = new FormData(e.target);


    // const username = formData.get("username");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const address = formData.get("address");
    const phone = formData.get("phone");

    try {
      const res = await apiRequest.post("/auth/login", { email, password });

      updateUser(res.data)

      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="loginPage">
      <div className="topWrapper">
        <div>
          <p className="habiText">Habi</p>
        </div>
        <div className="infoDiv">
          <p className="taska">Welcome Back</p>
          <p className="taskb">Please enter your details</p>
        </div>
        {error && <span>{error}</span>}
      </div>
      <div className="formFields">
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button disabled={isLoading} type="submit" className="submitButton">
            Login
          </button>
        </form>
      </div>
      <div className="lastPart">
        <div>
          <span className="already">Don't have account? </span>
          <button className="signup">signup</button>
        </div>
        <p>
          By logging in, you agree to Habbi's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
