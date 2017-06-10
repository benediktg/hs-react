import React from 'react';
import moment from 'moment';
import 'moment/locale/de';

function Message(props) {
  function handleLikeButton(event) {
    event.preventDefault();
    const like = {
      source: props.username,
      target: props.message.id,
    };
    props.onLike(like);
  }

  const time = '[' + moment(props.message.time).format('LTS') + ']';
  const ownMessage = props.username === props.message.author;
  const color = ownMessage ? 'blue' : 'red';
  const likeCount = props.message.likedFrom.length;
  let likeText;
  if (likeCount === 0) {
    likeText = '';
  } else if (likeCount === 1) {
    likeText = 'Gefällt ' + props.message.likedFrom[0];
  } else if (likeCount > 1) {
    likeText =
      'Gefällt ' +
      props.message.likedFrom.slice(0, -1).join(', ') +
      ' und ' +
      props.message.likedFrom.slice(-1);
  }

  return (
    <p>
      {time} <span style={{color: color}}>{props.message.author}</span>:
      {' '}{props.message.text}
      {' '}<button title={likeText} onClick={handleLikeButton}>+1</button>
    </p>
  );
}

export default Message;
