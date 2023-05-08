// src/components/Comment/Comment.js
import React from 'react';
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-author">
        <strong>{comment.user.username}</strong>
      </div>
      <div className="comment-content">{comment.content}</div>
    </div>
  );
};

export default Comment;
