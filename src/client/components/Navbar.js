import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
//  background-color: rgba(250, 199, 90, 0.4);
const Navbar = () => {
  return (
    <div id = "navContainer">
      <NavLink className="navLink"  to="/Home" activeStyle={{boxShadow:'0 0 .4em 0.1em white',
        backgroundColor: 'rgba(250, 199, 90, 0.4)' }} activeClassName="active">Home</NavLink>
      <NavLink className="navLink" to="/AllProjects"  activeStyle={{ boxShadow:'0 0 .4em 0.1em white', backgroundColor: 'rgba(250, 199, 90, 0.4)' }} activeClassName="active" >Projects</NavLink>
      <NavLink className="navLink" to="/About" activeClassName="active" activeStyle={{boxShadow:'0 0 .4em 0.1em white',  backgroundColor: 'rgba(250, 199, 90, 0.4)' }}>About</NavLink>
      <NavLink className="navLink" to="/Contact" activeClassName="active" activeStyle={{ boxShadow:'0 0 .4em 0.1em white', backgroundColor: 'rgba(250, 199, 90, 0.4)' }}>Contact</NavLink>
    </div>
  )
}

export default Navbar
