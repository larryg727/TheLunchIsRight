import * as actions from "../actionTypes"
const initialState = {
  lunches: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LUNCHES:
      return {
        ...state,
        lunches: action.lunches
      }
    default:
      return state
  }
}
