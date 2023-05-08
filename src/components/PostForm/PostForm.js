// src/components/PostForm/PostForm.js
import React, { useState, useContext } from 'react';

import './PostForm.css';
import { createPost } from '../../services/api';
import AuthContext from '../../utils/auth';
import { getToken } from '../../services/authService';

const PostForm = ({onPostSubmit}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call API to submit the new post
    try {
      await createPost({ title, content }, getToken()); // Use the createPost function from api.js
      setTitle('');
      setContent('');
      onPostSubmit();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

return (
    <div className="post-form-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="post-form-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="post-form-input">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default PostForm;
