import React from "react"
import PropTypes from "prop-types"
import { Spinner, LunchCard, CardCntr, WheelPointer } from "./components"
import Skeleton from "react-loading-skeleton"

const SpinWheel = ({ lunches, isSpinning }) => {
  return (
    <Spinner>
      <CardCntr isSpinning={isSpinning}>
        {lunches.length
          ? lunches.map((lunch, idx) => <LunchCard key={`${lunch.id}-${idx}`}>{lunch.name}</LunchCard>)
          : Array(50)
              .fill()
              .map((x, idx) => (
                <LunchCard key={idx}>
                  <Skeleton />
                </LunchCard>
              ))}
      </CardCntr>
      <WheelPointer />
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
