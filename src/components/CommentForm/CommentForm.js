// src/components/CommentForm/CommentForm.js
import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ postId, onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postId, content);
    setContent('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        className="comment-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
      />
      <button className="comment-submit" type="submit">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
