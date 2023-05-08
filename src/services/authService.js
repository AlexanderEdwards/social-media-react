// src/services/authService.js

import { register, login, getUser } from './api';
import jwtDecode from 'jwt-decode';

export const TOKEN_KEY = 'auth_token';

const setToken = (token) => {
  console.log('calling set token');
  localStorage.setItem(TOKEN_KEY, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const getToken = () => {
  console.log('TOKEN FROM LOCALSTORAGE', localStorage.getItem(TOKEN_KEY))
  return localStorage.getItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
  const token = getToken();
  console.log('here token', token)
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log('decoded token', decodedToken);
    // Check if token has expired
    const currentTime = Date.now();
    const tokenExpirationTime = decodedToken.exp * 1000; // Convert JWT expiration time to milliseconds
  
    if (currentTime > tokenExpirationTime) {
      console.log('token expired!');
      removeToken();
      return false;
    }
  
    return true;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return false;
  }
  
};

const registerUser = async (userData) => {
  const response = await register(userData);
  setToken(response.data.token);
  return response.data;
};

const loginUser = async (email, password) => {
  const response = await login({email, password});
  setToken(response.data.token);
  return response.data;
};

const logoutUser = () => {
  removeToken();
};

const getLoggedInUser = async () => {
  const token = getToken();
  if (!token) {
    return null;
  }
  console.log('token', token)
  const response = await getUser(localStorage.getItem('user'), token);
  return response.data;
};

const isAuthenticated = () => {
  return !!getToken();
};

export async function signup(username, email, password) {
  try {
    const response = await register({username, email, password})
    return response.data;
  } catch (error) {
    throw error;
  }
}


export {
  registerUser,
  loginUser,
  logoutUser,
  getLoggedInUser,
  isAuthenticated,
  getToken,
};
