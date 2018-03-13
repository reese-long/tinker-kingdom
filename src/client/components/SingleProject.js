import React, {Component} from 'react';
import Header from './Header'
import Gallery from './photoGallery'
import Snippet from './Snippet'

class SingleProject extends Component {
  constructor(props){
    super(props)
  }



  render () {
    const code =
    (
`
void master_switch()

{


  if (dataReceived == thisSwitchExplicitON) {
    light_state = true;
    dataReceived = 0;

    digitalWrite(relay_pin, light_state);

  }

  else if (dataReceived == thisSwitchExplicitOFF) {
    light_state = false;
    dataReceived = 0;
    digitalWrite(relay_pin, light_state);

  }


}
`
)

    const codeArr = code.split('\n')
return(
  <div align = "center">
  <Header />
    <div id="singleProject" align = "center">
    <div id = "singleProjTitle">{this.props.project.name}</div>
    <img id = "singleProjImg" src = {this.props.project.imgUrl} />
    <div id = "singleProjDesc">{this.props.project.fullDescription}</div>
    <Gallery  imgSet = {this.props.project.imgSet} />
    <div id = "codeStart">Let's see some code:</div>
    <div id = 'codeContainer'>
    <Snippet className = "snip"
    codeString ={code}
    language = "cpp" />
    </div>
    </div>
    </div>
)
  }
}

export default SingleProject

