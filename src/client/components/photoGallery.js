import React, {Component} from 'react';

class photoGallery extends Component {
  constructor(props){
    super(props)

    this.state = ({imgs: this.props.imgSet})
  }



  render () {
return(
    <div id="galleryBox" align = "center">
      {this.state.imgs.map((img)=>(
        <div>
        <img src = {img.src} className = 'galleryImg'/>
        <div className = 'galleryCaption' >{img.caption}</div>
        </div>
      ))
    }
    </div>
)
  }
}

export default photoGallery

