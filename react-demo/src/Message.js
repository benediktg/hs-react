import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <p>
        <strong>{this.props.author}:</strong> {this.props.content}
        {' '}<small>({this.props.time})</small>
      </p>
    );
  }
}

export default Message;
