import { connect } from "react-redux"
import LunchSpinner from "./LunchSpinner"
import { SetIsSpinning, ClearLunches } from "../../redux/actions"

const mapStateToProps = state => ({
  lunches: state.LunchChoices.lunches,
  winner: state.LunchChoices.winner,
  isSpinning: state.LunchChoices.isSpinning
})

const mapDispatchToProps = dispatch => ({
  setIsSpinning: isSpinning => dispatch(SetIsSpinning(isSpinning)),
  clearLunches: () => dispatch(ClearLunches())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchSpinner)
