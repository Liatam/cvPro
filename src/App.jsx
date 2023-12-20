// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Index from './components/Index';
import Resume from './pages/Resume/Resume';
import { Provider } from './context/cvContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import ResumeList from './pages/ResumeList/ResumeList';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/resume/:index' element={<Resume formData={{}}/>} />
          <Route path='/resume' element={<Resume formData={{}}/>} />
          {/* <Route path='/list' element={<ResumeList />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
