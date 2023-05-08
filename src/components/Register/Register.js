// src/components/Register/Register.js
import React, { useState } from 'react';
import './Register.css';
import { signup } from '../../services/authService';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   

    e.preventDefault();
    // Validate the form data
    if (formData.password !== formData.confirmPassword) {
      // You can show an error message here
      alert('Passwords do not match');
      return;
    }

    try {
      const { username, email, password } = formData;
      const response = await signup(username, email, password);
      // Redirect the user to the home page, or show a success message
      alert('Thanks for signing up!');
      navigate('/'); // Redirect to the home page
    } catch (error) {
      // Show an error message or handle the error accordingly
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
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
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
