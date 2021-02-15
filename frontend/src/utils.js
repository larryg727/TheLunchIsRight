import React, { useState } from "react"

export const useFormHandler = initialState => {
  const [formState, setFormState] = useState(initialState)

  return [formState, (key, value) => setFormState({ ...formState, [key]: value })]
}

export const convertMetersToMiles = meters => Math.round(meters * 0.000621371)

export const convertMilesToMeters = miles => Math.round((miles / 0.000621371) * 100) / 100
