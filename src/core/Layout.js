import React from 'react'

const Layout = ({children}) => {
  const Nav = () => {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <a href="/" className="text-light nav-link">
            Home
          </a>
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
