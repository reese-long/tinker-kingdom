

const initialState = {
  dogs: [
    { name: 'Taylor', imgUrl: 'src/img/taylor.png' },
    { name: 'Reggie', imgUrl: 'src/img/reggie.png' },
    { name: 'Pandora', imgUrl: 'src/img/pandora.png' }
  ],
  cats: [
    { name: 'Earl', imgUrl: 'src/img/earl.png' },
    { name: 'Winnie', imgUrl: 'src/img/winnie.png' },
    { name: 'Fellini', imgUrl: 'src/img/fellini.png' }
  ],
  petToAdopt: {},
  petToPreview: {}
  // These dogs and cats are on our intial state,
  // but there are a few more things we need!
};

export default function (state = initialState, action) {

  switch (action.type) {
    case 'PREVIEW_PET':
      return Object.assign({}, state, {
        petToPreview: action.pet
      })
    case 'ADOPT_PET': return Object.assign({}, state, {
      petToAdopt: action.pet
    })
    case 'ADD_NEW_DOG': return Object.assign({}, state, {
      dogs: [...state.dogs, action.dog]
    })
    case 'ADD_NEW_CAT': return Object.assign({}, state, {
      cats: [...state.cats, action.cat]
    })
    default: return initialState
  }
}
