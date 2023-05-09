// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../src/utils/auth';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PostList from './components/PostList/PostList';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/profile/:userId" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
