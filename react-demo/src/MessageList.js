import React from 'react';
import Message from './Message';

function MessageList(props) {
  if (props.inactive) {
    return null;
  }

  const messages = props.messages.map(message =>
    <Message key={message.id} message={message} username={props.username} onLike={props.onLike} />
  );

  return (
    <div>
      {messages}
    </div>
  );
}

export default MessageList;
