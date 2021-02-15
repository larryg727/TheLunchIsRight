import { connect } from "react-redux"
import SpinOptions from "./SpinOptions"
import { SetLocation, SetLunches } from "../../redux/actions"

const mapStateToProps = state => ({
  location: state.Options.location,
  additionalOptions: state.Options.additionalOptions,
  hasLunches: state.LunchChoices.lunches.length > 0
})

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(SetLocation(location)),
  setLunches: (lunches, winner) => dispatch(SetLunches(lunches, winner))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinOptions)
