import { PropTypes } from 'react'
import styled from 'styled-components'
import * as React from 'react'
import { font, palette } from 'styled-theme'
import { upateProfileImage } from 'services'
import cookie from 'react-cookies'

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
          <button type="submit">Upload Image22</button>
        </form>
      </div>
    );
  }
}
export default ImageUpload;

