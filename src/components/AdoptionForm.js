import React from 'react';

export default function AdoptionForm(props) {

  return (
    <div>
      <select onChange={props.previewPet}>
        {
          this.props.pets.map((pet) => <option key={pet.name} >{pet.name}</option>)
        }
      </select>
      <button onClick={props.adoptSelectedPet} />
    </div>
  );

}

