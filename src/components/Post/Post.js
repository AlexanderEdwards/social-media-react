// src/components/Post/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  console.log('post', post)
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <p className="post-author">Posted by: {post.user.username}</p>
    </div>
  );
};

export default Post;
