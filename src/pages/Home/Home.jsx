import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import AppNavbar from '../../components/AppNavbar'

function Home() {
    return (
        <div>
             <AppNavbar/>
            <div className="home-container">
                <div className="purple-section">
                    <h1>Welcome to Resume Maker</h1>
                </div>
                <div className="white-section">
                    <button className="purple-button"><Link to="/login">Login</Link></button>
                    <button className="purple-button"> <Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Home;
