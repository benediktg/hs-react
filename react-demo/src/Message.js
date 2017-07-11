import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/de';
import {Set} from 'immutable';

function Message(props) {
  const time = '[' + moment(props.message.time).format('LTS') + ']';
  const ownMessage = props.username === props.message.author;
  const color = ownMessage ? 'blue' : 'red';
  const likeCount = props.message.likedFrom.length;
  let likeText, countText;
  if (likeCount === 0) {
    likeText = '';
    countText = '';
  } else if (likeCount > 0) {
    likeText =
      'Gefällt '
      + (likeCount === 1 ? '' : props.message.likedFrom.slice(0, -1).join(', ') + ' und ')
      + props.message.likedFrom.slice(-1);
    countText = ' (' + likeCount + ')';
  }

  return (
    <p>
      {time} <span style={{color: color}}>{props.message.author}</span>: {props.message.text}{' '}
      <button
        title={likeText}
        onClick={() => props.onLike(
          props.message.likedFrom.add(props.username).sort((a, b) => a.localeCompare(b))
        )}
      >
        <span role="img" aria-label="Daumen hoch">
          &#128077;
        </span>
        {countText}
      </button>
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.instanceOf(Date),
    likedFrom: PropTypes.instanceOf(Set),
  }),
  username: PropTypes.string,
  onLike: PropTypes.func,
};

export default Message;
