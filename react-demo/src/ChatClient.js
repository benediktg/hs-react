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

  handleUsernameInput = event =>
    this.props.onUsernameInput({clientId: this.props.client.id, username: event.target.value});

  handleLogin = event => {
    event.preventDefault();
    this.props.onLogin({clientId: this.props.client.id, username: this.props.client.username});
  };

  handleMessageTextInput = event => this.setState({messageText: event.target.value});

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({author: this.props.client.username, text: this.state.messageText});
    this.setState({messageText: ''});
  };
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
