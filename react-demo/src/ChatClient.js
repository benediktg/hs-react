import React, { Component } from "react";
import moment from 'moment';
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

class ChatClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messageText: '',
    };

    this.handleMessageTextInput = this.handleMessageTextInput.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessageTextInput(messageText) {
    this.setState({
      messageText: messageText
    });
  }

  handleUsernameInput(username) {
    this.setState({
      username: username
    })
  }

  handleSubmit(event) {
    const message = {
      id: this.props.messages.length,
      author: this.state.username,
      content: this.state.messageText,
      time: moment().format(),
    };
    this.props.onSubmit(message);
    this.setState({
      messageText: ''
    })
  }

  render() {
    return (
      <div className="col-sm">
        <ChatInput
          username={this.state.username}
          messageText={this.state.messageText}
          userInput={this.props.userInput}
          onMessageTextInput={this.handleMessageTextInput}
          onUsernameInput={this.handleUsernameInput}
          onSubmit={this.handleSubmit}
        />
        <MessageList messages={this.props.messages} />
      </div>
    );
  }
}

export default ChatClient;
