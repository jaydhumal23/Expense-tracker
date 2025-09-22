import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Homepage from './pages/Homepage'
import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/Registerpage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/register" replace />} />
      <Route path='/home' element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>

  )
}

export default App
