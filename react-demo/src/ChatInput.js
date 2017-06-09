import React, { Component } from 'react';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.handleMessageTextInputChange = this.handleMessageTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameInputChange(event) {
    this.props.onUsernameInput(event.target.value);
  }

  handleLoginButton(event) {
    event.preventDefault();
    this.props.onLogin();
  }

  handleMessageTextInputChange(event) {
    this.props.onMessageTextInput(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <form onSubmit={this.handleSubmit}>
            {this.props.loggedIn
              ? <div className="input-group fluid">
                  <p><strong>{this.props.username}</strong></p>
                  <button name="login" onClick={this.handleLoginButton}>Logout</button>
                </div>
              : <div className="input-group fluid">
                  <input
                    name="username"
                    type="text"
                    value={this.props.username}
                    onChange={this.handleUsernameInputChange}
                    placeholder="Name"
                    size="1"
                  />
                  <button name="login" onClick={this.handleLoginButton}>Login</button>
                </div>}
            <div className="input-group fluid">
              <textarea
                name="messageText"
                value={this.props.messageText}
                onChange={this.handleMessageTextInputChange}
                disabled={!this.props.loggedIn}
                placeholder="Nachricht"
                required
                style={{
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <button type="submit">Senden</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatInput;
