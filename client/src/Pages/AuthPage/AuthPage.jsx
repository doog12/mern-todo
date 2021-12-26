import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './AuthPage.scss'
import Login from './Login'
import Register from './Register'

function AuthPage() {
  return (
      <Routes>
		<Route path="/auth" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
	  </Routes>
  )
}

export default AuthPage
