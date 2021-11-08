import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    });

    const data = await response.json();
    // console.log("Data : ", data);
    if (data.status === 'ok') {
      alert("Registered Successfully");
      window.location.href="/";
    } else {
      console.log("Error!");
    }
  }

  return (
    <div className="App">
      <h1>Mern User Auth</h1>
      <h2>Register</h2>

      <form onSubmit={registerUser}>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" 
        placeholder="Name"
        />
        <br />
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
        <input type="submit" value="Register"/>
      </form>
      <br />
      Already a member...? <Link to="/login">Click here to Login</Link>
      <br />
      <br />
      <br />
      <img src="https://tenor.com/view/bhagam-bhag-aeyy-heyy-raha-nahi-jaata-tadap-hi-aisi-hai-rajpal-yadav-gif-17694287.gif" height="350px" alt="register-meme"/>
    </div>
  );
}

export default App;
