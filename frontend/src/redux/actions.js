import * as actions from "./actionTypes"

export const SetLocation = location => ({
  type: actions.SET_LOCATION,
  location
})

export const SetLunches = (lunches, winner) => ({
  type: actions.SET_LUNCHES,
  lunches,
  winner
})

export const SetIsSpinning = isSpinning => ({
  type: actions.SET_IS_SPINNING,
  isSpinning
})
