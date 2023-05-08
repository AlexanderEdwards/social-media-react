// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        My App
      </Link>
      <div className="navbar-menu">
        <Link className="navbar-item" to="/post">
          Posts
        </Link>
        <Link className="navbar-item" to="/login">
          Login
        </Link>
        <Link className="navbar-item" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
