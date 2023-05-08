// src/components/CommentList/CommentList.js
import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
