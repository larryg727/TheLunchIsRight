import { connect } from "react-redux"
import SpinOptions from "./SpinOptions"
import { SetIsSpinning, SetLocation } from "../../redux/actions"

const mapStateToProps = state => ({
  location: state.Options.location
})

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(SetLocation(location)),
  setIsSpinning: isSpinning => dispatch(SetIsSpinning(isSpinning))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinOptions)
