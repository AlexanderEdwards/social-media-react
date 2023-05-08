import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { isLoggedIn, logoutUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  console.log('rendering?')
  console.log('logged in', isLoggedIn());
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        My App
      </Link>
      <div className="navbar-menu">
        {isLoggedIn() ? (
          <>
            <Link className="navbar-item" to="/posts">
              Posts
            </Link>
            <button onClick={()=> {
              logoutUser();
              navigate('/')
              }} className="navbar-item">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className="navbar-item" to="/login">
              Login
            </Link>
            <Link className="navbar-item" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
