import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { TOKEN_KEY, getLoggedInUser, getToken, isLoggedIn, logoutUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem(TOKEN_KEY) ? jwtDecode(getToken()) : null;
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
            <Link className="navbar-item" to={`/profile/${currentUser.id}`}>
              Profile
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
