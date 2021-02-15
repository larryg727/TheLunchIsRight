import * as actions from "../actionTypes"

const initialState = {
  location: "",
  additionalOptions: {
    categories: [],
    radius: 8050.0,
    price: ["1", "2", "3", "4"]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOCATION:
      return {
        ...state,
        location: action.location
      }
    case actions.SET_ADDITIONAL_OPTIONS:
      return {
        ...state,
        additionalOptions: action.additionalOptions
      }
    default:
      return state
  }
}
