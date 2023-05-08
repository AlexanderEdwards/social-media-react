// src/App.js
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Post from './components/Post';
import { AuthProvider } from '../../../../src/utils/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/post/:id" component={Post} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
