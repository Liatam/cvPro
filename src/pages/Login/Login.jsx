import React from 'react'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user);
                navigate('/form')
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Login</h2>
            </div>
            <div className="login-form">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;