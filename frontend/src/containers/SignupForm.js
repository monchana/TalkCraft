import { connect } from "react-redux"
import { SignupForm } from 'components/atoms/SignupForm'
import * as actions from 'store/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  fetchSignup: (username, password, email) => dispatch(actions.fetchSignup(username, password, email)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
