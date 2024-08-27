import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './webpage/Login';
import Signup from './webpage/Signup';
import Dashboard from './webpage/Dashboard';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log('is', isAuthenticated);
  return (
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
