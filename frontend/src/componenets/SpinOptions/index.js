import { connect } from "react-redux"
import SpinOptions from "./SpinOptions"
import { SetIsSpinning, SetLocation, SetLunches } from "../../redux/actions"

const mapStateToProps = state => ({
  location: state.Options.location,
  isSpinning: state.LunchChoices.isSpinning,
  hasLunches: state.LunchChoices.lunches.length > 0
})

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(SetLocation(location)),
  setIsSpinning: isSpinning => dispatch(SetIsSpinning(isSpinning))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinOptions)
