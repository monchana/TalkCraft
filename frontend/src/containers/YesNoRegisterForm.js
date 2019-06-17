import { connect } from "react-redux"
import { YesNoRegisterForm } from 'components/molecules/YesNoRegisterForm'
import * as actions from 'store/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  writeYesNo: (title, username) => dispatch(actions.writeYesNo(title, username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(YesNoRegisterForm)
