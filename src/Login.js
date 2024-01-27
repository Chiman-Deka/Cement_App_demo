// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import background from "./images/back_amrit3.png";


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming onLogin performs the actual authentication logic
    const isAuthenticated = onLogin(email, password);

    if (isAuthenticated) {
      // Redirect to the /price-display route
      history("/price-display");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    
      <div className="log"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1, // Set the zIndex to keep the form above the pseudo-element
      }}
    >
      
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <div
        className="background-blur"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: 'blur(15px)', // Adjust the blur intensity as needed
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Login;
