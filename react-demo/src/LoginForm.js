import React from 'react';

function LoginForm(props) {
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
    <div className="input-group fluid">
      {elem}
      <button onClick={props.onLogin}>{action}</button>
    </div>
  );
}

export default LoginForm;
