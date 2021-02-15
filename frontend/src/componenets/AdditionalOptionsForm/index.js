import { connect } from "react-redux"
import AdditionalOptionsForm from "./AdditionalOptionsForm"
import { SetAdditionalOptions } from "../../redux/actions"

const mapStateToProps = state => ({
  additionalOptions: state.Options.additionalOptions
})

const mapDispatchToProps = dispatch => ({
  setAdditionalOptions: additionalOptions => dispatch(SetAdditionalOptions(additionalOptions))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionalOptionsForm)
