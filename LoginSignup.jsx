import React, { useState } from 'react';
import '../components/CSS/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid registration");
      console.log("Invalid registration");
    }
    else{
      window.alert("Successful registration");
      console.log("Registration success");

      history("/signIn");
    }
  }

  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Register</h1>
        <form method='POST' className="loginSignup-fields">
          <input
            type="text"
            name='name'
            placeholder='Enter name'
            id='name' 
            autoComplete="current-name" required
            value={user.name}
            onChange={handleInput}
          />

          <input
            type="text"
            name='email'
            placeholder='Enter email'
            id='email' 
            autoComplete="current-email" required
            value={user.email}
            onChange={handleInput}
          />

          <input
            type="password"
            name='password'
            placeholder='Enter password'
            id='password' 
            autoComplete="current-password" required
            value={user.password}
            onChange={handleInput}
          />
          <button type='submit' onClick={PostData}>Register</button>
        </form>
        <p className="loginSignup-login">Already have an account? <Link to={`/signIn`}><span>Login Here</span></Link></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
