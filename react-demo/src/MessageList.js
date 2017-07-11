import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function MessageList(props) {
  if (props.inactive) {
    return null;
  }

  const messages = props.messages.map((message, index) =>
    <Message
      key={message.id}
      message={message}
      username={props.username}
      onLike={(likes) => props.onLike(
        props.messages.slice(0, index).concat(likes).concat(props.messages.slice(index + 1))
      )}
    />
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
  username: PropTypes.string,
  onLike: PropTypes.func,
};

export default MessageList;
