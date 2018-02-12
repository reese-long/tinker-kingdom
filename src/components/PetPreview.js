import React, { Component } from 'react';
import AdoptionForm from './AdoptionForm';

export default class PetPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petToPreview: {}
    }
    this.previewPet = this.previewPet.bind(this)
    this.adoptSelectedPet = this.adoptSelectedPet.bind(this)
  }

  previewPet(e) {
    let petName = e.target.value;
    const pet = this.props.pets.filter((pet) => pet.name === petName)
    this.setState({ petToPreview: pet[0] })
  }

  adoptSelectedPet() {
    this.props.adoptPet(this.state.petToPreview)
  }

  render() {
    return (
      <div className="preview">
        <div>
          <h5>Preview:</h5>
          <img src={this.state.petToPreview.imgUrl} />
        </div>
        <AdoptionForm pets={this.props.pets} previewPet={this.previewPet} adoptSelectedPet={this.adoptSelectedPet} />
      </div>
    );
  }
}
