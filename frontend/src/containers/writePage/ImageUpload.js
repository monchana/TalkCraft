import { connect } from 'react-redux'
import { ImageUpload } from 'components/atoms/ImageUpload'
import * as writePageActions from '../../store/writePage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onImageUpload: (photo) => {
            dispatch(write.writePageActions.imageUpload(photo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)


