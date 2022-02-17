import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Activate from './auth/Activate'
import Signin from './auth/Signin'
import Signup from './auth/Signup'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/auth/activate/:token" exact element={<Activate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
