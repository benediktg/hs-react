import React from 'react';
import PropTypes from 'prop-types';

function ChatInput(props) {
  let elem, action;
  if (props.loggedIn) {
    elem = <p><strong>{props.username}</strong></p>;
    action = 'Logout';
  } else {
    elem = (
      <input
        name="username"
        type="text"
        value={props.username}
        onChange={props.onUsernameInput}
        placeholder="Name"
        size="1"
      />
    );
    action = 'Login';
  }

  return (
    <div className="row">
      <div className="col-sm">
        <form onSubmit={props.onSubmit}>
          <div className="input-group fluid">
            {elem}
            <button onClick={props.onLogin}>{action}</button>
          </div>
          <div className="input-group fluid">
            <textarea
              value={props.messageText}
              onChange={props.onMessageTextInput}
              disabled={!props.loggedIn}
              placeholder="Nachricht"
              required
              style={{width: '100%', boxSizing: 'border-box'}}
            />
          </div>
          <button type="submit">Senden</button>
        </form>
      </div>
    </div>
  );
}

ChatInput.propTypes = {
  loggedIn: PropTypes.bool,
  username: PropTypes.string,
  messageText: PropTypes.string,
  onUsernameInput: PropTypes.func,
  onLogin: PropTypes.func,
  onMessageTextInput: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ChatInput;
