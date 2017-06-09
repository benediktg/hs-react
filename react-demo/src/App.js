import React, { Component } from "react";
import "./style/App.css";
import ChatWindow from "./ChatWindow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.addMessage = this.addMessage.bind(this);
  };

  addMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React-Demo</h1>
        </div>
        <div className="container">
          <div className="row">
            <ChatWindow
              messages={this.state.messages}
              onSubmit={this.addMessage}
            />
            <ChatWindow
              messages={this.state.messages}
              onSubmit={this.addMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
