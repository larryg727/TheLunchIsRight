import * as actions from "./actionTypes"

export const SetLocation = location => ({
  type: actions.SET_LOCATION,
  location
})

export const SetLunches = lunches => ({
  type: actions.SET_LUNCHES,
  lunches
})
