import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({children}) => {
  let location = useLocation()
  //   console.log(`path: ${location.pathname}`)

  const isActive = (path) =>
    location.pathname === path ? {color: '#000'} : {color: '#fff'} //'text-dark' : 'text-light' //

  const Nav = () => {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className={`nav-link`} style={isActive('/')}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signin" className={`nav-link`} style={isActive('/signin')}>
            Signin
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className={`nav-link`} style={isActive('/signup')}>
            Signup
          </Link>
        </li>
      </ul>
    )
  }
  return (
    <>
      <ToastContainer />
      <div>{Nav()}</div>
      <div className="container">{children}</div>
    </>
  )
}

export default Layout
