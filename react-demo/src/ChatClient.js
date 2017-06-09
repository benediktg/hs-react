import React, { Component } from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

class ChatClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messageText: '',
      loggedIn: false
    };

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleMessageTextInput = this.handleMessageTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameInput(username) {
    this.setState({
      username: username
    });
  }

  handleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }

  handleMessageTextInput(messageText) {
    this.setState({
      messageText: messageText
    });
  }

  handleSubmit() {
    const message = {
      id: this.props.messages.length,
      author: this.state.username,
      content: this.state.messageText,
      time: new Date()
    };
    this.props.onSubmit(message);
    this.setState({
      messageText: ''
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
        <MessageList messages={this.props.messages} username={this.state.username} />
      </div>
    );
  }
}

export default ChatClient;
