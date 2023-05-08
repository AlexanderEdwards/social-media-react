// src/components/Home/Home.js
import React, { useEffect, useRef } from 'react';
import PostList from '../PostList/PostList';
import PostForm from '../PostForm/PostForm';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);
  console.log('home')
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#f0f0f0';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#003300';
      ctx.fillText('My App', centerX, centerY);

      angle += 0.01;
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.translate(-centerX, -centerY);

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(draw);
    };
  }, []);

  return (
    <div className="home-container">
      <canvas ref={canvasRef} width="200" height="200" className="home-logo" />
      <div className="home-welcome">
        <h1 className="home-title">Welcome to My Social App</h1>
        <p className="home-description">
          This is a place where you can share your thoughts, connect with friends, and discover new content. Enjoy your stay!
        </p>
        
      </div>
    </div>
  );
};

export default Home;
