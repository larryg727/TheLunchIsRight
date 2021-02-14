import * as actions from "../actionTypes"

const initialState = {
  location: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOCATION:
      return {
        ...state,
        location: action.location
      }
    default:
      return state
  }
}
