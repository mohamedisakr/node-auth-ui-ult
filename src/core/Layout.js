import React from 'react'
import {Link} from 'react-router-dom'

const Layout = ({children}) => {
  const Nav = () => {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className="text-light nav-link">
            Home
          </Link>
        </li>
      </ul>
    )
  }
  return (
    <>
      <div>{Nav()}</div>
      <div className="container">{children}</div>
    </>
  )
}

export default Layout
