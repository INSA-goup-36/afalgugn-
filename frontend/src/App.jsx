import React, { useState } from "react";
import "./index.css"
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Dashboard from './components/user/dashboard.jsx'
import AiChat from "./components/user/aichat.jsx"
import Signup from './components/auth/Signup.jsx'
import Login from "./components/auth/Login.jsx"
import FoundPerson from './components/user/FoundPerson.jsx'
import ReportMissing from './components/user/ReportMissing.jsx'
import ResetPassword from './components/auth/ResetPassword.jsx'
import ForgotPassword from './components/auth/ForgotPassword.jsx'
 export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/aichat" element={<AiChat/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/report" element={<ReportMissing/>}/>
      <Route path="/post" element={<FoundPerson/>}/>
      <Route path="/forgot" element={<ForgotPassword/>}/>
      <Route path="/reset" element={<ResetPassword/>}/>
    </Routes>
    </BrowserRouter>
  );
 }