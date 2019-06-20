import { PropTypes } from 'react'
import styled from 'styled-components'
import * as React from 'react'
import { font, palette } from 'styled-theme'
import { upateProfileImage } from 'services'
import cookie from 'react-cookies'
/*
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.upload22 = React.createRef();
  }

  _handleSubmit = e => {
    e.preventDefault();
    const token = cookie.load("jwt");
    upateProfileImage(this.upload22.current.files[0], token);
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" ref={this.upload22} />
          <button type="submit">Upload Image</button>
        </form>
      </div>
    );
  }
}
export default ImageUpload;
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
`

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo : null,imagePreviewUrl: ''};
  }

  componentDidMount() {
    this.props.onImageUpload(this.state.photo)
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let photo = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        photo: photo,
        imagePreviewUrl: reader.result,
      });
      this.props.onImageUpload(this.state.photo);
    }

    reader.readAsDataURL(photo)
  }

  render() {
    let imagePreviewUrl;
    if(this.state.imagePreviewUrl == ''){
      if(this.props.statefunction.writePage.photo){
        imagePreviewUrl = this.props.statefunction.writePage.photo
      }
      else{
        imagePreviewUrl = null
      }
    }
    else{
      imagePreviewUrl = this.state.imagePreviewUrl
    }

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{maxHeight:"200px",maxWidth:"200px"}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <Wrapper>
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </Wrapper>
      </div>
    )
  }
}

ImageUpload.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

ImageUpload.defaultProps = {
  palette: 'grayscale',
}

export default ImageUpload