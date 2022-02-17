import React from 'react'
import {Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({children}) => {
  const Nav = () => {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className="text-light nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="text-light nav-link">
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
