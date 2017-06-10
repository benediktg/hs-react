import React from 'react';
import moment from 'moment';
import 'moment/locale/de';

function Message(props) {
  function handleLikeButton(event) {
    event.preventDefault();
    const like = {
      source: props.username,
      target: props.message.id
    };
    props.onLike(like);
  }

  const time = '[' + moment(props.message.time).format('LTS') + ']';
  const ownMessage = props.username === props.message.author;
  const color = ownMessage ? 'blue' : 'red';
  const likedFrom = props.message.likedFrom.length
    ? 'Gefällt ' + props.message.likedFrom.join(', ')
    : '';

  return (
    <p>
      {time} <span style={{ color: color }}>{props.message.author}</span>:
      {' '}{props.message.text}
      {' '}<button title={likedFrom} onClick={handleLikeButton}>+1</button>
    </p>
  );
}

export default Message;
