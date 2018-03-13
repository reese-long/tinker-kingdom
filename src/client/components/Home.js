import React from 'react';
import HomeNav from './HomeNav'
const Home = () => {
  return (
    <div>
    <div id = "titleContainer">
    <h1 id = "title">TINKER KINGDOM
    <br />
    <div id ="byMe">by Reese Long</div>
    </h1>

    <img className = "titleGif" src = "/src/client/img/welcomePhotos/gears.gif" />
    </div>

    <div id="homeContainer">

    <HomeNav />
    </div>
    </div>
  )
}

export default Home

