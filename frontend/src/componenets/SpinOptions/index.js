import { connect } from "react-redux"
import SpinOptions from "./SpinOptions"
import { SetLocation } from "../../redux/actions"
import "./styles.scss"

const mapStateToProps = state => ({
  location: state.Options.location
})

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(SetLocation(location))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinOptions)
