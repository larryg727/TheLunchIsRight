import { connect } from "react-redux"
import SpinOptions from "./SpinOptions"
import { SetLocation, SetLunches } from "../../redux/actions"

const mapStateToProps = state => ({
  location: state.Options.location,
  hasLunches: state.LunchChoices.lunches.length > 0
})

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(SetLocation(location)),
  setLunches: lunches => dispatch(SetLunches(lunches))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinOptions)
