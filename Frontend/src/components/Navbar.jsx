
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Stay<span>cation.</span>
      </h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/Add-hotel">Add Hotel</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="login-btn">
        Login / Sign Up
      </button>
    </nav>
  )
}

export default Navbar
