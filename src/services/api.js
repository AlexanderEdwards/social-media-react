// src/services/api.js
import axios from 'axios';
import { getToken } from './authService';

const API_URL = 'http://139.59.130.149:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getHeaders = (token) => {  
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
} }

export const register = (userData) => api.post('users/auth/signup', userData);
export const login = (userData) => api.post('users/auth/login', userData);
export const getUser = (id, token) => api.get(`users/${id}`, getHeaders(token));

export const getPosts = () => api.get('/posts');
export const getPost = (id) => api.get(`/posts/${id}`);
export const createPost = (postData, token) => api.post('/posts', postData, getHeaders(token));
export const updatePost = (id, postData, token) => api.put(`/posts/${id}`, postData, getHeaders(token));
export const deletePost = (id, token) => api.delete(`/posts/${id}`, getHeaders(token));

export const likePost = (postId, token) => api.post(`/likes/${postId}`, {}, getHeaders(token));
export const unlikePost = (postId, token) => api.delete(`/likes/${postId}`, getHeaders(token));

export const getComments = (postId) => api.get(`/comments/${postId}`);
export const createComment = (postId, commentData, token) => api.post(`/comments/${postId}`, commentData, getHeaders(token));
export const updateComment = (commentId, commentData, token) => api.put(`/comments/${commentId}`, commentData, getHeaders(token));
export const deleteComment = (commentId, token) => api.delete(`/comments/${commentId}`, getHeaders(token));

export default api;
