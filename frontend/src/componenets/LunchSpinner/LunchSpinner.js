import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import SpinWheel from "./SpinWheel"
import SpinResult from "./SpinResult"

const LunchSpinner = ({ lunches, winner }) => {
  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsSpinning(false)
    }, 6000)
  }, [])

  if (!lunches.length) return null
  if (isSpinning) return <SpinWheel lunches={lunches} />
  return <SpinResult winner={winner} />
}

LunchSpinner.propType = {
  lunches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

export default LunchSpinner
