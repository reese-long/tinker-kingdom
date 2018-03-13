import React from "react";

class LoadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true };

    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
      {

        this.state.loading ?
        <img src = '/src/client/img/loadGear.gif'  className = "loadSpinnner" />
        :
        <div />
      }
        <img
        className = "cardImg"
        style={{display: this.state.loading ?   'none':'inline' }}
        src={this.props.src}
        onLoad={this.handleLoad}
        />
      </div>
    );
  }
}
export default LoadImg;
