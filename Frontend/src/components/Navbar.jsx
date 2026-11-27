import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="image-logo">
        <img
          src="/Staycation-logo.png"
          alt="Staycation Logo"
          className="image-logo"
        />
      </div>
     

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/Add-hotel">Add Hotel</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="login-btn">Login / Sign Up</button>
    </nav>
  );
}

export default Navbar;
