import { connect } from 'react-redux'
import { UserForm } from 'components/molecules/UserForm'
import * as actions from 'store/actions'

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  user: state.login.user,
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
