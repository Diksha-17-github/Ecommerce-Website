import React, {useState} from 'react'
import '../components/CSS/SigningIn.css'
import {createBrowserHistory} from 'history';
const SigningIn = () => {
    const history = createBrowserHistory();
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: ""
    });

    let name, value;
    const handleInput = (e) => {
      name= e.target.name;
      value= e.target.value;
  
      setUser({
        ...user,
        [name]: value,
      });
    }
  
    const PostData = async (e) => {
      e.preventDefault();
  
      const { email, password } = user;
      const res = await fetch("http://localhost:5000/api/auth/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });
  
      const data = await res.json();
      if(data.status === 422 || !data){
        window.alert("Invalid registration");
        console.log("Invalid registration");
      }
      else{
        window.alert("Successful Signin");
        console.log("Signin success");
  
        history.push("/");
      }
    }
  return (
    <div>
      <div className='login'>
      <div className="login-container">
        <h1>LogIn</h1>
        <form method='POST' className="loginSignup-fields">

          <input
            type="text"
            name='email'
            placeholder='Enter email'
            id='email' required
            value={user.email}
            onChange={handleInput}
          />

          <input
            type="password"
            name='password'
            placeholder='Enter password'
            id='password' required
            value={user.password}
            onChange={handleInput}
          />
          <button type='submit' onClick={PostData}>Submit</button>
        </form>
        <div className="loginSignup-agree">
          <p>Please use same email and password that was used in registeration</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SigningIn;
