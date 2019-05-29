import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import CancelButton from 'components'
import PostButton from 'components'
import ImageUpload from 'components'

class PostPageInfo extends React.Component {
    static defaultProps = {
        info: {
            title: 'title',
            mainTopic: 'mainTopic',
            id: 0
        }
    }
    state = {
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
        // 설정합니다
        title : '',
        mainTopic : '',
    }
    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }
    
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 로 전환 될 때
            // info 의 값을 state 에 넣어준다
            this.setState({
              title: info.title,
              mainTopic: info.mainTopic
            })
        }
      
        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            onUpdate(info.id, {
              title: this.state.title,
              mainTopic: this.state.mainTopic
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing
            && !nextState.editing
            && nextProps.info == this.props.info) {
                return false;
            }
        return true;
    }

    render() {
        const style = {
          border: '1px solid black',
          padding: '8px',
          margin: '8px'
        };
        const { editing } = this.state;
        if (editing) {
            return (
                <div style={style}>
                  <div>
                    <input
                      value={this.state.title}
                      name="title"
                      placeholder="title"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input
                      value={this.state.mainTopic}
                      name="mainTopic"
                      placeholder="mainTopic"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button onClick={this.handleToggleEdit}>적용</button>
                  <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        const {
          title, mainTopic
        } = this.props.info;
        
        return (
          <div style={style}>
            <div><b>{title}</b></div>
            <div>{mainTopic}</div>
            <button onClick={this.handleToggleEdit}>Edit</button>
            <button onClick={this.handleRemove}>Delete</button>
          </div>
        );
      }
    }
    
    export default PostPageInfo;