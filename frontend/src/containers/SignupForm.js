import { connect } from "react-redux"
import { SignupForm } from 'components/atoms/SignupForm'
import * as actions from 'store/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  fetchSignup: (username, password) => dispatch(actions.fetchSignup(username, password)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
