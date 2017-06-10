import React from 'react';
import _ from 'lodash';
import ChatClient from './ChatClient';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    const clients = this.state.clients.slice();
    clients.find(client => client.id === userObj.clientId).username = userObj.username;
    this.setState({
      clients: clients,
    });
  }

  handleLogin(userObj) {
    const loggedInUsers = this.state.clients
      .filter(client => client.loggedIn)
      .map(client => client.username);
    const prevLoggedIn = this.state.clients.find(client => client.id === userObj.clientId).loggedIn;
    if (!prevLoggedIn && _.includes(loggedInUsers, userObj.username)) {
      alert('Benutzername bereits vergeben');
      return;
    }
    const clients = this.state.clients.slice();
    clients.find(client => client.id === userObj.clientId).loggedIn = !prevLoggedIn;
    this.setState({
      clients: clients,
    });
  }

  addMessage(message) {
    message.id = this.state.messages.length;
    message.time = new Date();
    message.likedFrom = [];
    this.setState({
      messages: [...this.state.messages, message],
    });
  }

  addLike(like) {
    const prevLikes = this.state.messages.find(message => message.id === like.target).likedFrom;
    if (_.includes(prevLikes, like.source)) {
      return;
    }
    const messages = this.state.messages.slice();
    messages[like.target].likedFrom = [...prevLikes, like.source].sort((a, b) =>
      a.localeCompare(b)
    );
    this.setState({
      messages: messages,
    });
  }

  addClient() {
    this.setState({
      clients: [
        ...this.state.clients,
        {id: this.state.clients.length, username: '', loggedIn: false},
      ],
    });
  }

  removeClient() {
    this.setState({
      clients: this.state.clients.slice(0, -1),
    });
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
