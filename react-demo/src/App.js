import React from 'react';
import _ from 'lodash';
import ChatClient from './ChatClient';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      clientCount: 2,
    };

    this.addMessage = this.addMessage.bind(this);
    this.addClient = this.addClient.bind(this);
    this.removeClient = this.removeClient.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  addMessage(message) {
    message.id = this.state.messages.length;
    message.time = new Date();
    message.likedFrom = [];
    console.log(message);
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
      clientCount: this.state.clientCount + 1,
    });
  }

  removeClient() {
    if (this.state.clientCount >= 1) {
      this.setState({
        clientCount: this.state.clientCount - 1,
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
            {[...Array(this.state.clientCount)].map((elem, index) =>
              <ChatClient
                key={index}
                messages={this.state.messages}
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
