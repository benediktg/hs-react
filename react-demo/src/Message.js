import React from 'react';

function Message(props) {
  const color = props.username === props.author ? 'blue' : 'red';

    return (
      <p>
      {'['}{props.time}{']'} <span style={{ color: color }}>{props.author}</span>:
      {' '}{props.content}
      </p>
    );
}

export default Message;
