// src/components/Login/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY, loginUser } from '../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formData;
      const response = await loginUser(email, password)
      console.log('user object', response.user)
      // Save the auth token and user data to local storage
      navigate('/posts');
    } catch (error) {
      // Show an error message or handle the error accordingly
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
      />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
