import React from 'react';
import LoginForm from './LoginForm';

function ChatInput(props) {
  return (
    <div className="row">
      <div className="col-sm">
        <form onSubmit={props.onSubmit}>
          <LoginForm
            loggedIn={props.loggedIn}
            onLogin={props.onLogin}
            username={props.username}
            onUsernameInput={props.onUsernameInput}
          />
          <div className="input-group fluid">
            <textarea
              value={props.messageText}
              onChange={props.onMessageTextInput}
              disabled={!props.loggedIn}
              placeholder="Nachricht"
              required
              style={{
                width: '100%',
                boxSizing: 'border-box',
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
