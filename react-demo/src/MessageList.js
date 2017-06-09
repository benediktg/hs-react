import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map((message) =>
      <div className="col-sm-12">
        <Message
          key={message.id}
          content={message.content}
          time={message.time}
        />
      </div>
    );

    return (
      <div className="row">
        {messages}
      </div>
    );
  }
}

export default MessageList;
