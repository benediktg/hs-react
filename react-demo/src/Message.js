import React, { Component } from 'react';

class Message extends Component {
  render() {
    const color = this.props.username === this.props.author ? 'blue' : 'red';
    return (
      <p>
        {'['}{this.props.time}{']'} <span style={{ color: color }}>{this.props.author}</span>:
        {' '}{this.props.content}
        {' '}<button>+1</button>
      </p>
    );
  }
}

export default Message;
