import React from 'react'

const Footer = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark footer">
  <div className="container-fluid" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
  <b style={{color:"white",fontSize:"15px"}}>&#169;copyright 2022</b>
    <a className="navbar-brand" href="#"  style={{color:'white',fontSize:"15px"}}>{props.title}</a>
    

  </div>
</nav>
  )
}

export default Footer;