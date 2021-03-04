import React, { useEffect } from "react"
import PropTypes from "prop-types"
import SpinWheel from "./SpinWheel"
import SpinResult from "./SpinResult"
import { useSelector, useDispatch } from "react-redux"
import { SetIsSpinning, ClearLunches } from "../../redux/actions"

const LunchSpinner = ({ getLunches }) => {
  const lunches = useSelector(state => state.LunchChoices.lunches)
  const winner = useSelector(state => state.LunchChoices.winner)
  const isSpinning = useSelector(state => state.LunchChoices.isSpinning)

  const dispatch = useDispatch()

  const spinAgain = () => {
    dispatch(ClearLunches())
    dispatch(SetIsSpinning(true))
    getLunches()
  }

  const getSpinnerLunches = () => {
    let spinnerLunches = []
    while (spinnerLunches.length < 50) {
      spinnerLunches.push(...lunches)
    }
    spinnerLunches[40] = winner
    return spinnerLunches
  }

  useEffect(() => {
    if (lunches.length && isSpinning) {
      setTimeout(() => {
        dispatch(SetIsSpinning(false))
      }, 8000)
    }
  }, [lunches])

  return (
    <>
      <SpinWheel isSpinning={isSpinning} lunches={lunches.length ? getSpinnerLunches() : []} />
      <SpinResult
        winner={winner}
        isOpen={!isSpinning}
        clearLunches={() => dispatch(ClearLunches())}
        spinAgain={spinAgain}
      />
    </>
  )
}

LunchSpinner.propType = {
  getLunches: PropTypes.func.isRequired
}

export default LunchSpinner
