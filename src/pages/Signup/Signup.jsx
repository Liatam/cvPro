import React from 'react'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../Signup/Signup.css';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../firebaseConfig';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        addUser(email, password, role)
        navigate('/login')
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>Sign Up</h2>
      </div>
      <div className="signup-form">
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="signup-button" onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup