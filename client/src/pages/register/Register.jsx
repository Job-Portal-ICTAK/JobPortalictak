import "./register.css";
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

<<<<<<< HEAD
  //handle the inputs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,email,password,
    });
    res.data && window.location.replace("/login");
   } catch(err) {
      setError(true);
    }
   }
=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,email,password
      });
      res.data && window.location.replace("/login");
    }catch(err) {
      setError(true);
    }
  };

>>>>>>> ac399b7e2dcbbd4944518eacd4ce9cae1909c156
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
<<<<<<< HEAD
        <input className="registerInput" type="text"
        placeholder="Enter your username..."
        onChange={e=>setUsername(e.target.value)} 
        />
        <label>Email</label>
        <input className="registerInput" type="text" 
        placeholder="Enter your email..."
        onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" 
        placeholder="Enter your password..."
        onChange={e=>setPassword(e.target.value)} 
        />
=======
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e=>setUsername(e.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}/>
>>>>>>> ac399b7e2dcbbd4944518eacd4ce9cae1909c156
        <button className="registerButton" type="submit">Register</button>
      </form>
        <button className="registerLoginButton">
        <Link to="/login" className="link">
          LOGIN
        </Link>
        </button>
<<<<<<< HEAD
        {error && <span style={{color:"red"}} >Something went Wrong!</span>}
=======
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
>>>>>>> ac399b7e2dcbbd4944518eacd4ce9cae1909c156
    </div>
    )
}