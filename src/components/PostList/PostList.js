// src/components/PostList/PostList.js
import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';

import './PostList.css';
import { getPosts } from '../../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await getPosts(); // Use the getPosts function from api.js
      setPosts(response.data); // Update the state with the returned posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  return (
    <div className="post-list">
      <PostForm onPostSubmit={fetchPosts}/>
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
