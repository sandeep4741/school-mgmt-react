import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://192.168.30.94:4000/Login', { username, password })
          .then((response) => {
          if (response.data.username === "clerk") {
              navigate("/Clerk");
          } else if (response.data.username === "super") {
              navigate("/Super");
          } else if (response.data.username === "principal") {
              navigate("/Principal");
          } else {
              setLoginError("Invalid username or password");
          }
          console.log("data", response);
      }).catch((error) => {
          console.log(error);
          setLoginError("Invalid username or password");
          setUsername(""); // Clear username
          setPassword(""); // Clear password
      });
  }
  

    return (
      <div className='abc'>
        <div className="box-form">
            <div className="left">
                <div className="overlay">
                    <h1>Hello Lycos</h1>
                </div>
            </div>
            <div className="right">
                <h5>Login</h5>
                <div className="inputs">
                    <input type="text" placeholder="User Name" value={username}  onChange={(e) => setUsername(e.target.value)} required />
                    <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <br/><br/>
                <button onClick={handleSubmit}>Login</button>
                {loginError && <p style={{color:'red', marginTop:'25px'}}>{loginError}</p>}
            </div>
        </div>
        </div>
    );
};

export default Login;
