import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/home.jsx';
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Nav from "./components/home/landing/nav/nav.jsx";
import "./index.css";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";
import About from "./components/About/About.jsx";
import FoundPerson from "./components/FoundPerson/FoundPerson.jsx";
import ReportMissing from "./components/ReportMissing/ReportMissing.jsx";

// Main app content without the nav duplication
function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  
  // Only show nav on pages that aren't login/signup
  const showNav = !['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {showNav && <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
          path="/signup" 
          element={<Signup setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
  path="/forgot-password" 
  element={<ForgotPassword />} 
/>
<Route 
  path="/reset-password" 
  element={<ResetPassword />} 
/>

        <Route 
          path="/about" 
          element={<About />}     
/>
        <Route 
          path="/found-person" 
          element={<FoundPerson />}
        />
        <Route
          path="/report-missing"
          element={<ReportMissing />}
        />
      </Routes>
      
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}