// src/components/Post/Post.js
import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <Link to={`/profile/${post.user._id}`}><p className="post-author">Posted by: {post.user.username}</p></Link>
    </div>
  );
};

export default Post;
