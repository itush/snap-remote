import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from './pages/ProtectedRoute';
import Errors from "./pages/Errors";
function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="login" element={<Login setUser = {setUser}/>} />
        <Route path="dashboard" element={
        <ProtectedRoute user = {user}>
        <Dashboard user = {user}/>
        </ProtectedRoute>
        } />
        <Route path="*" element={<Errors />} />
      </Routes>
     
    </div>
  )
}

export default App;