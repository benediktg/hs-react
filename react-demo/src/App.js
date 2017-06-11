import React from 'react';
import _ from 'lodash';
import ChatClient from './ChatClient';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      clients: Array(2).fill().map((client, index) => ({id: index, username: '', loggedIn: false})),
    };

    this.addClient = this.addClient.bind(this);
    this.removeClient = this.removeClient.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  handleUsernameInput(userObj) {
    this.setState(prevState => {
      const clients = prevState.clients.slice();
      clients.find(client => client.id === userObj.clientId).username = userObj.username;

      return {clients: clients};
    });
  }

  handleLogin(userObj) {
    this.setState(prevState => {
      const loggedInUsers = prevState.clients
        .filter(client => client.loggedIn)
        .map(client => client.username);
      const prevLoggedIn = prevState.clients.find(client => client.id === userObj.clientId)
        .loggedIn;
      if (!prevLoggedIn && _.includes(loggedInUsers, userObj.username)) {
        alert('Benutzername bereits vergeben');
        return;
      }
      const clients = prevState.clients.slice();
      clients.find(client => client.id === userObj.clientId).loggedIn = !prevLoggedIn;

      return {clients: clients};
    });
  }

  addMessage(message) {
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        {
          ...message,
          id: prevState.messages.length,
          time: new Date(),
          likedFrom: [],
        },
      ],
    }));
  }

  addLike(like) {
    this.setState(prevState => {
      const prevLikes = prevState.messages.find(message => message.id === like.target).likedFrom;
      if (_.includes(prevLikes, like.source)) {
        return {};
      }
      const messages = prevState.messages.slice();
      messages[like.target].likedFrom = [...prevLikes, like.source].sort((a, b) =>
        a.localeCompare(b)
      );

      return {messages: messages};
    });
  }

  addClient() {
    this.setState(prevState => ({
      clients: [...prevState.clients, {id: prevState.clients.length, username: '', loggedIn: false}],
    }));
  }

  removeClient() {
    this.setState(prevState => ({
      clients: prevState.clients.slice(0, -1),
    }));
  }

  render() {
    return (
      <div>
        <header className="row">
          <h2>React-Demo</h2>
          <button onClick={this.addClient}>+</button>
          <button onClick={this.removeClient}>-</button>
        </header>
        <div className="container">
          <div className="row">
            {this.state.clients.map(client =>
              <ChatClient
                key={client.id}
                client={client}
                messages={this.state.messages}
                onUsernameInput={this.handleUsernameInput}
                onLogin={this.handleLogin}
                onSubmit={this.addMessage}
                onLike={this.addLike}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
