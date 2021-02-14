import { connect } from "react-redux"
import LunchSpinner from "./LunchSpinner"

const mapStateToProps = state => ({
  lunches: state.LunchChoices.lunches
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchSpinner)
