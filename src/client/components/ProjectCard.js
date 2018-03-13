import React, { Component } from 'react';
import Tags from './Tags'
import LoadImg from './LoadImg'
class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowHovering: false
    }
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)

  }

  mouseEnterHandler() {
    this.setState({ nowHovering: true })
  }
  mouseLeaveHandler() {
    this.setState({ nowHovering: false })
  }
  render() {
    return (
      <div className="projectCard" onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler} onClick={() => this.props.handleClick(this.props.project)}>
          {
            (!this.state.nowHovering) ?
              (
                <div className = "innerCardFlex">
                  <div className="topFlex">
                    <div className="cardProjectTitle">{this.props.project.name} </div>
                    <LoadImg src = {this.props.project.imgUrl} />
                    {/*<img className="cardImg" src={this.props.project.imgUrl} />*/}
                  </div>
                  <div className="dateTagsFlex">
                    <div className="captionDate">{this.props.project.date}</div>
                    <Tags tagsArr={this.props.project.tagsArr} />


                  </div>
                </div>
              )
              :
              <div className = 'innerCardFlex'>
              <div clasName = "topFlex">
                <div className="cardProjectTitle">{this.props.project.name} </div>
                <div className="projDesc">{this.props.project.description}</div>
                <button className = "gitBtn"><img className= 'ghLogo' src = '/src/client/img/gh64.png'/>View on Github</button>
                </div>
                <div className="dateTagsFlex">
                <div className="captionDate">{this.props.project.date}</div>
                <Tags tagsArr={this.props.project.tagsArr} />

         </div>
              </div>
          }
        </div>
        )
      }
      }
      export default ProjectCard
