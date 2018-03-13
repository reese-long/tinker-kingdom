import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store, { fetchMessages, fetchChannels } from '../store';
//Components:
import Footer from './Footer.js'
import Home from './Home.js'
import AllProjects from './AllProjects.js'
import SingleProject from './SingleProject.js'
import Contact from './Contact.js'
import About from './About.js'
import projectsObj from '../projects'


export default class Main extends Component {
  constructor(props){
    super(props)
this.state = ({
  projects: projectsObj,
  currentProj:{}
})
this.setCurrent = this.setCurrent.bind(this)
  }

  setCurrent(proj){
    this.setState({currentProj:proj})
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
          <Route exact path="/" component={Home} />

            <Route exact path="/AllProjects" render={()=> <AllProjects setCurrent = {this.setCurrent} allProjects = {this.state.projects}/>} />
            <Route path="/SingleProject/:projectName" render={()=><SingleProject project = {this.state.currentProj}/>}/>
            <Route exact path="/SingleProject/:projectName" component={SingleProject} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Home" component={Home} />

          </Switch>
          <Footer />
        </main>
      </div>
    );
  }
}
