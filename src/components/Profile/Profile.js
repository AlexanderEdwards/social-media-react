// src/components/Profile/Profile.js
import './Profile.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/api'; // Suppose you have an API function to get user profile

const Profile = () => {
  const { userId } = useParams(); // userId is from the URL
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUser(userId)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div className="profile-container">
      {profile ? (
        <div>
          <h2>{profile.username}</h2>
          <p>{profile.bio}</p>
          {/* Render more profile information here */}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
export default Profile;
