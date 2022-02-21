import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Activate from './auth/Activate'
import AdminRoute from './auth/AdminRoute'
import Forgot from './auth/Forgot'
import PrivateRoute from './auth/PrivateRoute'
import Signin from './auth/Signin'
import Signup from './auth/Signup'
import Admin from './core/Admin'
import Dashboard from './core/Dashboard'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/forgot" exact element={<Forgot />} />
        <Route path="/auth/activate/:token" exact element={<Activate />} />
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
