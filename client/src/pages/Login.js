import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    });

    const data = await response.json();
    
    if(data.user) {
      localStorage.setItem('token', data.user)
      alert("Login Successfully...");
      window.location.href = '/homepage'
    } else {
      alert("Please Check your Email or Password...")
    }
  }
    return (
        <div className="App">
      <h1>Mern User Auth</h1>
      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder="Email"
        />
        <br />
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder="Password"
        autoComplete="on"
        />
        <br />
        <input type="submit" value="Login"/>
      </form>
      <br />
      Not a member...? <Link to="/register">Click here to Register</Link>
      <br />
      Otherwise
      <br />
      <img src="https://tenor.com/view/nikal-laude-nikal-lavde-fursat-laude-pehli-fursat-gif-14527278.gif" height="450px" alt="login-meme"/>
    </div>
    )
}


export default Login
