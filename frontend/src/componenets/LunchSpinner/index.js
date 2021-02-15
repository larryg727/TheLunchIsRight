import { connect } from "react-redux"
import LunchSpinner from "./LunchSpinner"
import { SetIsSpinning, SetLunches } from "../../redux/actions"

const mapStateToProps = state => ({
  lunches: state.LunchChoices.lunches,
  winner: state.LunchChoices.winner,
  isSpinning: state.LunchChoices.isSpinning
})

const mapDispatchToProps = dispatch => ({
  setIsSpinning: isSpinning => dispatch(SetIsSpinning(isSpinning)),
  clearLunches: () => dispatch(SetLunches([], null))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchSpinner)
