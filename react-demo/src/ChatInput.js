import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.handleMessageTextInputChange = this.handleMessageTextInputChange.bind(this);
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleMessageTextInputChange(event) {
    this.props.onMessageTextInput(event.target.value);
  }

  handleUsernameInputChange(event) {
    this.props.onUsernameInput(event.target.value);
  }

  handleSubmitEvent(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div className="row cols-sm">
        <form onSubmit={this.handleSubmitEvent}>
          <div className="input-group fluid">
            <input
              name="username"
              type="text"
              value={this.props.username}
              onChange={this.handleUsernameInputChange}
              placeholder="Name"
              required="true"
            />
          </div>
          <div className="input-group fluid">
            <textarea
              name="messageText"
              value={this.props.messageText}
              onChange={this.handleMessageTextInputChange}
              placeholder="Nachricht"
              required="true"
              style={{
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button type="submit">Senden</button>
        </form>
      </div>
    );
  }
}

export default ChatInput;
