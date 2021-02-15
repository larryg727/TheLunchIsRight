import React from "react"
import PropTypes from "prop-types"
import { Spinner, LunchCard } from "./components"
import Skeleton from "react-loading-skeleton"

const SpinWheel = ({ lunches }) => {
  return (
    <Spinner>
      {lunches.length
        ? lunches.map(lunch => <LunchCard key={lunch.id}>{lunch.name}</LunchCard>)
        : Array(4)
            .fill()
            .map((x, idx) => (
              <LunchCard key={idx}>
                <Skeleton />
              </LunchCard>
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
