import { connect } from 'react-redux'
import { UserForm } from 'components/molecules/UserForm'
import * as actions from 'store/actions'

const mapStateToProps = state => (
  {
  isLoggedIn: state.navigationbar.isLoggedIn,
  user: state.navigationbar.user,
  }
)

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
