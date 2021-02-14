import * as actions from "../actionTypes"
const initialState = {
  lunches: [],
  isSpinning: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LUNCHES:
      return {
        ...state,
        lunches: action.lunches,
        winner: action.winner
      }
    case actions.SET_IS_SPINNING:
      return {
        ...state,
        isSpinning: action.isSpinning
      }
    default:
      return state
  }
}
