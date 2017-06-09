import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <p><strong>{this.props.time}:</strong> {this.props.content}</p>
    );
  }
}

export default Message;
