import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"  style={{color:'white'}}>{props.title}</a>

  </div>
</nav>
  )
}

export default Navbar;