import React, { Component } from 'react';
import { withRouter,history } from 'react-router'

import Header from './Header'
import ProjectCard from './ProjectCard'
 class AllProjects extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: this.props.allProjects
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (project){
    console.log('CLICK HANDLER IN ALL PROJECTS FIRED', this.props)
    this.props.setCurrent(project)
    this.props.history.push(`/SingleProject/${project.name}`)
  }


render(){
    return (
      <div align='center'>
      <Header />
      <div id = "allProjects">
      {/*<h1 className = "pageTitle">Projects</h1>*/}
      <br />
      {
        this.state.projects.map((project)=>(
          <ProjectCard project = {project} handleClick = {this.handleClick}/>
        ))
      }
      </div>
      </div>
    )
  }
}

export default withRouter(AllProjects)
