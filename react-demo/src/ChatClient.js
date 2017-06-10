import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import Message from './Message';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messageText: '',
      loggedIn: false,
    };

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleMessageTextInput = this.handleMessageTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameInput(event) {
    const username = event.target.value;
    this.setState({
      username: username,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
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
      author: this.state.username,
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
          username={this.state.username}
          loggedIn={this.state.loggedIn}
          messageText={this.state.messageText}
          userInput={this.props.userInput}
          onUsernameInput={this.handleUsernameInput}
          onLogin={this.handleLogin}
          onMessageTextInput={this.handleMessageTextInput}
          onSubmit={this.handleSubmit}
        />
        <MessageList
          inactive={!this.state.loggedIn}
          messages={this.props.messages}
          username={this.state.username}
          onLike={this.props.onLike}
        />
      </div>
    );
  }
}

ChatClient.propTypes = {
  userInput: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.instanceOf(Message)),
  onSubmit: PropTypes.func,
  onLike: PropTypes.func,
};

export default ChatClient;
