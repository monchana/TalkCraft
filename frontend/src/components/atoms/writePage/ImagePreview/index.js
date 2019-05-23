import * as React from "react";
import { upateProfileImage } from "../../../../../../services/userApi";
import cookie from "react-cookies";

class ImageUpload extends React.Component {

  state = {
    file: ""
  };

  _handleSubmit = e => {
    e.preventDefault();
    const token = cookie.load("jwt");
    upateProfileImage(this.state.file, token);
  };

  _handleImageChange = e => {
    e.preventDefault();

    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ file: file });
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input
            type="file"
            onChange={this._handleImageChange}
          />
          <button type="submit">Upload Image22</button>
        </form>
      </div>
    );
  }
}
export default ImageUpload