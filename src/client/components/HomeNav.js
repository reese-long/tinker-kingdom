import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const HomeNav = () => {
  return (
    <div id="homeNavContainer">
      <div className="linkBox">
        <NavLink className="navLinkHome" to="/AllProjects" activeClassName="active"  >Projects</NavLink>
      </div>
      <div className="linkBox">
        <NavLink className="navLinkHome" to="/About" activeClassName="active" >About</NavLink>
      </div>
      <div className="linkBox">

        <NavLink className="navLinkHome" to="/Contact" activeClassName="active" >Contact</NavLink>
      </div>
    </div>
  )
}

export default HomeNav
