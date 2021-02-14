import { connect } from "react-redux"
import LunchSpinner from "./LunchSpinner"

const mapStateToProps = state => ({
  lunches: state.LunchChoices.lunches,
  winner: state.LunchChoices.winner
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchSpinner)
