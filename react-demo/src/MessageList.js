import React from 'react';
import moment from 'moment';
import 'moment/locale/de';
import Message from './Message';

function MessageList(props) {
  const messages = props.messages.map(message =>
      <div className="col-sm-12">
        <Message
          key={message.id}
          content={message.content}
          time={moment(message.time).format('LTS')}
          author={message.author}
        username={props.username}
        />
      </div>
    );

    return (
    <div>
        {messages}
    </div>
    );
}

export default MessageList;
