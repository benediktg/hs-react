import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/de';
import Message from './Message';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <div className="col-sm-12">
        <Message
          key={message.id}
          content={message.content}
          time={moment(message.time).format('[um] LTS')}
          author={message.author}
        />
      </div>
    );

    return (
      <dl>
        {messages}
      </dl>
    );
  }
}

export default MessageList;
