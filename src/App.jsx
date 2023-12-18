// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Index from './components/Index';
import Resume from './components/Resume';
import {Provider} from './context/cvContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup'; 

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {/* //index???  */}
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
