import { connect } from "react-redux"
import HomePage from "./HomePage"
import { SetIsSpinning, SetLunches } from "../../redux/actions"

const mapStateToProps = state => ({
  location: state.Options.location,
  additionalOptions: state.Options.additionalOptions
})

const mapDispatchToProps = dispatch => ({
  setLunches: (lunches, winner) => dispatch(SetLunches(lunches, winner)),
  setIsSpinning: isSpinning => dispatch(SetIsSpinning(isSpinning))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
