import React from 'react';
import _ from 'lodash';
import ChatClient from './ChatClient';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      messages: [],
      clients: Array(2).fill().map((client, index) => ({id: index, username: '', loggedIn: false})),
    };
  }

  render() {
    const clients = this.state.clients.map(client => (
      <ChatClient
        key={client.id}
        client={client}
        messages={this.state.messages}
        onUsernameInput={this.handleUsernameInput}
        onLogin={this.handleLogin}
        onSubmit={this.addMessage}
        onLike={this.addLike}
      />
    ));

    return (
      <div>
        <header className="row">
          <h2>React-Demo</h2>
          <button onClick={this.addClient}>+</button>
          <button onClick={this.removeClient}>-</button>
        </header>
        <div className="container">
          <div className="row">
            {clients}
          </div>
        </div>
      </div>
    );
  }

  handleUsernameInput = userObj =>
    this.setState(prevState => {
      const clients = prevState.clients.slice();
      clients.find(client => client.id === userObj.clientId).username = userObj.username;

      return {clients};
    });

  handleLogin = client => this.setState(prevState => {
    const loggedInUsers = prevState.clients
      .filter(item => item.loggedIn)
      .map(item => item.username);
    const prevLoggedIn = prevState.clients.find(item => item.id === client.id).loggedIn;
    if (!prevLoggedIn && _.includes(loggedInUsers, client.username)) {
      alert('Benutzername bereits vergeben');
      return;
    } else {
      const clients = prevState.clients.slice(0, client.id)
        .concat([client]).concat(prevState.clients.slice(client.id + 1));
      return {clients};
    }
  });

  addMessage = message =>
    this.setState(prevState => ({
      messages: prevState.messages.concat({
        ...message,
        id: prevState.messages.length,
        time: new Date(),
        likedFrom: [],
      }),
    }));

  addLike = messages => this.setState({messages});

  addClient = () =>
    this.setState(prevState => ({
      clients: prevState.clients.concat({
        id: prevState.clients.length,
        username: '',
        loggedIn: false,
      }),
    }));

  removeClient = () => this.setState(prevState => ({clients: prevState.clients.slice(0, -1)}));
}

export default App;
