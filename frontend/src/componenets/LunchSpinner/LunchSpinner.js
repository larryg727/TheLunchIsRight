import React from "react"
import PropTypes from "prop-types"
import { Spinner, LunchCard } from "./components"

const LunchSpinner = ({ lunches }) => {
  if (!lunches.length) return null
  return (
    <Spinner>
      {lunches.map(lunch => (
        <LunchCard key={lunch.name}>{lunch.name}</LunchCard>
      ))}
    </Spinner>
  )
}

LunchSpinner.propType = {
  lunches: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default LunchSpinner
