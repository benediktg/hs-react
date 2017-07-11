import React from 'react';
import PropTypes from 'prop-types';
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

MessageList.propTypes = {
  inactive: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.instanceOf(Message)),
  onLike: PropTypes.func,
};

export default MessageList;
