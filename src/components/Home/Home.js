// src/components/Home/Home.js
import React from 'react';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;
