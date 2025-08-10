import React, { useState } from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className="logo" style={{ marginLeft: "15px" }} />
      <ul className="nav-links">
        <li
          style={{ color: currentPage === "Home" ? "#3470E8" : "gray", cursor: 'pointer' }}
          onClick={() => setCurrentPage("Home")}
        >
          Home
        </li>
        <li
          style={{ color: currentPage === "About" ? "#3470E8" : "gray", cursor: 'pointer' }}
          onClick={() => setCurrentPage("About")}
        >
          About
        </li>
        <li
          style={{ color: currentPage === "post found person" ? "#3470E8" : "gray", cursor: 'pointer' }}
          onClick={() => setCurrentPage("post found person")}
        >
          Post Found Person
        </li>
        <li
          style={{ color: currentPage === "report missing person" ? "#3470E8" : "gray", cursor: 'pointer' }}
          onClick={() => setCurrentPage("report missing person")}
        >
          Report Missing Person
        </li>
        <li
          style={{ color: currentPage === "search report" ? "#3470E8" : "gray", cursor: 'pointer' }}
          onClick={() => setCurrentPage("search report")}
        >
          Search Report
        </li>
        <li>
          <button className='btn'>login</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
