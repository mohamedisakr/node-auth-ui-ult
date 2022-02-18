import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {isAuthenticate, signout} from '../auth/helpers'

const Layout = ({children}) => {
  let location = useLocation()
  const navigate = useNavigate()
  //   console.log(`path: ${location.pathname}`)

  const isActive = (path) =>
    location.pathname === path ? {color: '#000'} : {color: '#fff'} //'text-dark' : 'text-light' //

  const handleSignout = (e) => {
    e.preventDefault()
    signout(() => {
      navigate('/')
    })
  }

  const Nav = () => {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className={`nav-link`} style={isActive('/')}>
            Home
          </Link>
        </li>
        {!isAuthenticate() ? (
          <>
            <li className="nav-item">
              <Link
                to="/signin"
                className={`nav-link`}
                style={isActive('/signin')}
              >
                Signin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className={`nav-link`}
                style={isActive('/signup')}
              >
                Signup
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              {/* <span onClick={handleSignout} className="nav-link">
              Signout
            </span> */}
              <Link
                onClick={handleSignout}
                to="/"
                className={`nav-link`}
                style={{color: '#fff'}}
              >
                Signout
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" style={{color: '#fff'}}>
                Hello {isAuthenticate().name}
              </span>
            </li>
          </>
        )}
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
