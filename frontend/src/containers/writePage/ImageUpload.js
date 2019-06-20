import { connect } from 'react-redux'
import { ImageUpload } from 'components/atoms/writePage/ImageUpload'
import * as actions from '../../store/writePage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onImageUpload: (photo) => {
            dispatch(actions.imageUpload(photo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)


