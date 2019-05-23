import React from 'react';
import { connect } from 'react-redux';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import ChatUsers from '../components/ChatUsers';
import ChatUsersTyping from '../components/ChatUsersTyping';
import {
  setCurrentUserID,
  addMessage,
  addHistory,
  addUser,
  removeUser,
  addTypingUser,
  removeTypingUser,
} from '../actions';

function mapStateToProps(state) {
  return {
    history: state.app.get('messages').toJS(),
    userID: state.app.get('userID'),
    lastMessageTimestamp: state.app.get('lastMessageTimestamp'),
    users: state.app.get('users').toJS(),
    usersTyping: state.app.get('usersTyping').toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
    setUserID: (userID) => dispatch(setCurrentUserID(userID)),
    addHistory: (messages, timestamp) => dispatch(addHistory(messages, timestamp)),
    addUser: (userID) => dispatch(addUser(userID)),
    removeUser: (userID) => dispatch(removeUser(userID)),
    addTypingUser: (userID) => dispatch(addTypingUser(userID)),
    removeTypingUser: (userID) => dispatch(removeTypingUser(userID)),
  };
}

class App extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
    userID: React.PropTypes.number,
    addMessage: React.PropTypes.func,
    setUserID: React.PropTypes.func,
    addHistory: React.PropTypes.func,
    lastMessageTimestamp: React.PropTypes.string,
    users: React.PropTypes.array,
    addUser: React.PropTypes.func,
    removeUser: React.PropTypes.func,
    usersTyping: React.PropTypes.array,
    addTypingUser: React.PropTypes.func,
    removeTypingUser: React.PropTypes.func,
  };

  componentDidMount() {
    const ID = Math.round(Math.random() * 1000000);
    this.props.setUserID(ID);
    this.PubNub = PUBNUB.init({
      publish_key: 'pub-c-199f8cfb-5dd3-470f-baa7-d6cb52929ca4',
      subscribe_key: 'sub-c-d2a5720a-1d1a-11e6-8b91-02ee2ddab7fe',
      ssl: (location.protocol.toLowerCase() === 'https:'),
      uuid: ID,
    });
    this.PubNub.subscribe({
      channel: 'ReactChat',
      message: this.props.addMessage,
      presence: this.onPresenceChange,
    });
    this.fetchHistory();
    window.addEventListener('beforeunload', this.leaveChat);
  }

  componentWillUnmount() {
    this.leaveChat();
  }

  onPresenceChange = (presenceData) => {
    switch (presenceData.action) {
    case 'join':
      this.props.addUser(presenceData.uuid);
      break;
    case 'leave':
    case 'timeout':
      this.props.removeUser(presenceData.uuid);
      break;
    case 'state-change':
      if (presenceData.data) {
        if (presenceData.data.isTyping === true) {
          this.props.addTypingUser(presenceData.uuid);
        } else {
          this.props.removeTypingUser(presenceData.uuid);
        }
      }
      break;
    default:
      break;
    }
  }

  render() {
    const { props, sendMessage, fetchHistory, setTypingState } = this;
    return (
      <div className="message-container">
        <ChatUsers users={ props.users } />
        <ChatHistory history={ props.history } fetchHistory={ fetchHistory } />
        <ChatUsersTyping usersTyping={ props.usersTyping } />
        <ChatInput userID={ props.userID } sendMessage={ sendMessage } setTypingState={ setTypingState } />
      </div>
    );
  }

  setTypingState = (isTyping) => {
    this.PubNub.state({
      channel: 'ReactChat',
      uuid: this.props.userID,
      state: { isTyping },
    });
  };

  leaveChat = () => {
    this.PubNub.unsubscribe({ channel: 'ReactChat' });
  }

  fetchHistory = () => {
    const { props } = this;
    this.PubNub.history({
      channel: 'ReactChat',
      count: 15,
      start: props.lastMessageTimestamp,
      callback: (data) => {
        // data is Array(3), where index 0 is an array of messages
        // and index 1 and 2 are start and end dates of the messages
        props.addHistory(data[0], data[1]);
      },
    });
  }

  sendMessage = (message) => {
    this.PubNub.publish({
      channel: 'ReactChat',
      message: message,
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
