import React, { Component } from 'react';
import ChatClient from './ChatClient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      clientCount: 3
    };

    this.addMessage = this.addMessage.bind(this);
    this.addClient = this.addClient.bind(this);
    this.removeClient = this.removeClient.bind(this);
  }

  addMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }

  addClient() {
    this.setState({
      clientCount: this.state.clientCount + 1
    });
  }

  removeClient() {
    if (this.state.clientCount >= 1) {
      this.setState({
        clientCount: this.state.clientCount - 1
      });
    }
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
            {[...Array(this.state.clientCount)].map(() =>
              <ChatClient messages={this.state.messages} onSubmit={this.addMessage} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
