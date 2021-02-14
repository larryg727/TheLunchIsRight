import React from "react"
import PropTypes from "prop-types"
import { Spinner, LunchCard } from "./components"
import LunchSpinner from "./LunchSpinner"

const SpinWheel = ({ lunches }) => {
  return (
    <Spinner>
      {lunches.map(lunch => (
        <LunchCard key={lunch.id}>{lunch.name}</LunchCard>
      ))}
    </Spinner>
  )
}

SpinWheel.propType = {
  lunches: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

export default SpinWheel
