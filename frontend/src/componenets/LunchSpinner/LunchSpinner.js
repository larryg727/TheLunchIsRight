import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import SpinWheel from "./SpinWheel"
import SpinResult from "./SpinResult"

const LunchSpinner = ({ lunches, winner, isSpinning, setIsSpinning, clearLunches, getLunches }) => {
  const spinAgain = () => {
    clearLunches()
    setIsSpinning(true)
    getLunches()
  }

  useEffect(() => {
    if (lunches.length && isSpinning) {
      setTimeout(() => {
        setIsSpinning(false)
      }, 8000)
    }
  }, [lunches])

  if (!lunches.length && !isSpinning) return null
  return (
    <>
      <SpinWheel isSpinning={isSpinning} lunches={lunches.length ? [...lunches, ...lunches, winner, ...lunches] : []} />
      <SpinResult winner={winner} isOpen={!isSpinning} clearLunches={clearLunches} spinAgain={spinAgain} />
    </>
  )
}

LunchSpinner.propType = {
  lunches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  winner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    display_phone: PropTypes.string,
    review_count: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    distance: PropTypes.number,
    location: PropTypes.shape({
      address1: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postal_code: PropTypes.string
    })
  }).isRequired,
  isSpinning: PropTypes.bool.isRequired,
  setIsSpinning: PropTypes.func.isRequired,
  clearLunches: PropTypes.func.isRequired,
  getLunches: PropTypes.func.isRequired
}

export default LunchSpinner
