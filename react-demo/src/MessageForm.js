import React, { Component } from "react";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      messageText: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row cols-sm">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group fluid">
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="input-group fluid">
            <textarea
              name="messageText"
              value={this.state.messageText}
              onChange={this.handleInputChange}
              placeholder="Nachricht"
              style={{
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <button type="submit">Senden</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
