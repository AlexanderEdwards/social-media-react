// src/components/PostList/PostList.js
import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    // In a real-world scenario, you would call your API here to fetch the posts
    setPosts([
      {
        id: 1,
        title: 'Sample Post 1',
        content: 'This is a sample post.',
        user: { username: 'John Doe' },
      },
      {
        id: 2,
        title: 'Sample Post 2',
        content: 'This is another sample post.',
        user: { username: 'Jane Doe' },
      },
    ]);
  }, []);
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
