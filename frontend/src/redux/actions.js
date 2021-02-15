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

export const SetAdditionalOptions = additionalOptions => ({
  type: actions.SET_ADDITIONAL_OPTIONS,
  additionalOptions
})
