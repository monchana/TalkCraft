import { connect } from 'react-redux'
import { ImageUpload } from 'components/atoms/ImageUpload'
import { imageUpload } from '../store/writepage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onImageUpload: (file) => {
            dispatch(imageUpload(file))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)


