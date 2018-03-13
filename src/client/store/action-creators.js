
export const ADOPT_PET = 'ADOPT_PET'
export const ADD_NEW_DOG = 'ADD_NEW_DOG'
export const ADD_NEW_CAT = 'ADD_NEW_CAT'

export const adoptPet = function (pet) {
  let action = {
    type: ADOPT_PET,
    pet: pet
  }
  return action
}

export const previewPet = function (pet) {
  let action = {
    type: PREVIEW_PET,
    pet: pet

  }
  return action
}

export const addNewDog = function (dog) {
  let action = {
    type: ADD_NEW_DOG,
    dog: dog
  }
  return action
}

export const addNewCat = function (cat) {
  let action = {
    type: ADD_NEW_CAT,
    cat: cat
  }
  return action
}

