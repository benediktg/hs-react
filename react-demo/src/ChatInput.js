import React from 'react';

function ChatInput(props) {
  return (
    <div className="row">
      <div className="col-sm">
        <form onSubmit={props.onSubmit}>
          {props.loggedIn
            ? <div className="input-group fluid">
                <p><strong>{props.username}</strong></p>
                <button name="login" onClick={props.onLogin}>Logout</button>
              </div>
            : <div className="input-group fluid">
                <input
                  name="username"
                  type="text"
                  value={props.username}
                  onChange={props.onUsernameInput}
                  placeholder="Name"
                  size="1"
                />
                <button name="login" onClick={props.onLogin}>Login</button>
              </div>}
          <div className="input-group fluid">
            <textarea
              name="messageText"
              value={props.messageText}
              onChange={props.onMessageTextInput}
              disabled={!props.loggedIn}
              placeholder="Nachricht"
              required
              style={{
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button type="submit">Senden</button>
        </form>
      </div>
    </div>
  );
}

export default ChatInput;
