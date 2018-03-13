import React from 'react';
import Navbar from './Navbar'
const Header = () => {
  return (
    <div id="header">
    <div id= 'headerTitle'>
    <h2 id = "titleNav">TINKER KINGDOM</h2>
    <img id = "headerLogo" src = '/src/client/img/welcomePhotos/gears.gif'/ >
    </div>
      <Navbar />
    </div>
  )
}

export default Header

