import React, { Component } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

class ChatWindow extends Component {
  render() {
    return (
      <div className="col-sm">
        <MessageForm />
        <MessageList messages={this.props.messages} />
      </div>
    );
  }
}

export default ChatWindow;
