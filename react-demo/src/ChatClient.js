import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import Message from './Message';

class ChatClient extends React.Component {
  constructor() {
    super();
    this.state = {
      messageText: '',
    };

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleMessageTextInput = this.handleMessageTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameInput(event) {
    const userObj = {
      clientId: this.props.client.id,
      username: event.target.value,
    };
    this.props.onUsernameInput(userObj);
  }

  handleLogin(event) {
    event.preventDefault();
    const loginObj = {
      clientId: this.props.client.id,
      username: this.props.client.username,
    };
    this.props.onLogin(loginObj);
  }

  handleMessageTextInput(event) {
    const messageText = event.target.value;
    this.setState({
      messageText: messageText,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const message = {
      author: this.props.client.username,
      text: this.state.messageText,
    };
    this.props.onSubmit(message);
    this.setState({
      messageText: '',
    });
  }

  render() {
    return (
      <div className="col-sm">
        <ChatInput
          username={this.props.client.username}
          loggedIn={this.props.client.loggedIn}
          messageText={this.state.messageText}
          onUsernameInput={this.handleUsernameInput}
          onLogin={this.handleLogin}
          onMessageTextInput={this.handleMessageTextInput}
          onSubmit={this.handleSubmit}
        />
        <MessageList
          inactive={!this.props.client.loggedIn}
          messages={this.props.messages}
          username={this.props.client.username}
          onLike={this.props.onLike}
        />
      </div>
    );
  }
}

ChatClient.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
  }),
  messages: PropTypes.arrayOf(PropTypes.instanceOf(Message)),
  onUsernameInput: PropTypes.func,
  onLogin: PropTypes.func,
  onSubmit: PropTypes.func,
  onLike: PropTypes.func,
};

export default ChatClient;
